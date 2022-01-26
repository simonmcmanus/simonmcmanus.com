---
date: 2012-01-05
title: Learning from Single Page Web Applications
tags: ["application architecture","application templates","javascript application","javascript applications","page applications","Image","post"]
---
  
I've spent the last three years working on single page applications of various shapes and sizes. I don't like em,  this post isn't about why but I will just say I like data to be exposed at the lowest level (HTTP) and not require Javascript to turn it into something useful.   All that being said I've been lucky enough to work with some clever folks and the end results have all been very interesting and pushed boundaries in their own way.  
  
At [Full Frontal](http://2011.full-frontal.org/) I enjoyed listening to [Nicholas Zakas](https://twitter.com/#!/slicknet) talking about [Scalable Javascript Application Architecture](http://www.slideshare.net/nzakas/scalable-javascript-application-architecture). In many ways he described the architecture we used for the [Volkswagen Configurator](http://configurator.vw.com). Earlier in the day [Phil Hawksworth](http://hawksworx.com/) had been talking about [Excessive Enhancement](http://speakerdeck.com/u/philhawksworth/p/excessive-enhancement).  
  
It struck me that while most front end MVC frameworks make it easy to build Javascript applications, making them work as web applications (without Javascript) becomes much more difficult. This is largely due to the fact that you define and build your application, templates/page structure using the browser's Javascript interpreter.  
  
I'm of the view that if you architect something properly you can get the same full experience provided by Javascript applications but still have a reliable fallback for those who do not have Javascript enabled. That is what I call a proper web application.  
  
In the back of my mind I've been thinking about Charlie Robbins excellent post: [Scaling Isomorphic Javascript Code](http://blog.nodejitsu.com/scaling-isomorphic-javascript-code) which talks elegantly about why MVC might not be the best pattern in an environment where you can execute Javascript on the server. He suggests the Resource-View-Presenter pattern.  
  
It seemed that the way we currently split our frameworks between front and back end reduces reuse of configuration/code and actually encourages duplication.  
  
I wanted to try defining all of these things on the server, so they could be consumed on the server and client.  

As soon as the talk finished I found myself writing code. This blog post talks about what I have been building and why.  
  

Sharing URLs between client and server
--------------------------------------

  
Allow me to deviate for a moment.  
  
On large applications it's common practice to split the code and teams between front and back end developers.  This often results in duplication and unnecessary bugs.  A common example being maintaining URLs in two places.  In the browser we might a have a URLs object:  
```js
namespace.urls = {
    login: '/login',  
    user: '/user/:username',
    ....
}
```
  
And then on the server the same URLs would be defined possibly using a different syntax.  Changing one does not change the other, and with split teams this can result in unnecessary bugs.  
  
With [Node.js](http://nodejs.org/) it's particularly easy to share exactly the same URL object on the client and server. If you ensure your HTML links are populated from the same URL object your application will continue to function when URLs change.  
  
This is what I've been doing in some of my Node apps:  
```js
(function(exports){
      exports.HOME = '/';
    exports.LOGIN = '/login';
    exports.USERS = '/users';
    exports.USER = '/users/:user';
    // also add URL functions here that can be shared between client and server.
    exports.build = function(str, tokens) {
        for(token in tokens){
            str = str.replace(':'+token, tokens\[token\]);
        }
        return str;
    };
})(typeof exports === 'undefined' ? namespace.urls={} : exports);
```
  
That allows it to be used as a Node module using require('./urls.js') and when served to the browser the URLs are available at namespace.urls.  
  
I've been using [Express.js](http://expressjs.com/), the parameter sytax seems to work nicely with [Levi routes](https://github.com/PaulKinlan/leviroutes) on the front end.  
  
This seems like common sense. It's a fine example of [DRY.](http://en.wikipedia.org/wiki/Don't_repeat_yourself)  Define as much as possible in server-side JS and then allow it to be consumed by the client-side JS reusing as much logic as possible.  

Reusable modules
----------------

  
[TiddlyWiki](http://tiddlywiki.com/) has the concept of plugins which are essentially just a chunk of HTML/CSS/JS relevant to a particular piece of functionality which could be added to HTML using a special syntax:  
```js
<<pluginName>>
```
  
On the [Volkswagen Configurator](http://configurator.vw.com) we also have the concept of UI's which were reusable chunks of HTML/CSS/JS which could be appended into any DOM node.  
  
Both are essentially variants of the [Module Pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth) with added support for HTML and CSS as part of the module.  Both methods work really nicely just so long as you've got Javascript turned on.  
  
I started to build a simple Node.js app which could parse a modules folder and serve the resources at appropriate URLs. See the following folder structure:  
  
![](https://img.skitch.com/20120102-cyxfm2b6pgs8c5fasj7b1ppg5b.jpg "Folder Strucutre")  
  
Generated the following URLs:  
```js
/contact.css
/contact.html
/contact.js
/content.css
/content.html
/content.js
/flickr.css
/flickr.html
/flickr.js
```
  
You will notice there is an app.js file in the flickr folder which contains the server-side JS required by the module. Later this will provide a getData method to asynchronously generate a templating object which can populate the HTML.  

Define your views on the server
-------------------------------

  
In browserland it's really easy to mess around with the DOM. You can completely transform a page, especially when you start appending modules of HTML/CSS/JS to DOM nodes. The problem comes when you want to show the same view to something that doesn't understand Javascript, an RSS feed or search engine for example.  
  
I decided to create a view specification which could be read by the server and also served to the browser. Doing so should make it really easy to render the exact same HTML with or without Javascript enabled.  Using [Sizlate](https://github.com/simonmcmanus/sizlate) I started with this (it has since changed):  
```js
var views = [{
    url: '/user/:user'  
    view: 'userpage',
    modules: [
        'photos',
        'login',
        'timeline'
    ]
 }];
```
  
In the following example I have left out the JS and CSS files.  The view is just a folder containing a HTML file of the same name and an optional app.js (as with the modules). It assumes the view HTML file contains a  tag with a id corresponding to each of the modules specified for the view.  
  
I like this simple approach but in order for it to scale I may soon need to start using HTML data attributes instead of ids. This is what the folder structure looked like:  
![](https://img.skitch.com/20120102-naqptbhb5cn63tgcx7gky8f83x.jpg)  
  
project/views/userpage/userpage.html (the view HTML file) contains:  
```js
<html>
<body>
    <nav>...</nav>
    <div id="photos" />
    <div id="login" />
    <div id="timeline" />
</body>
</html>
```
  
The end result would look something like this:  
```js
<html>
<body>
    <nav>...</nav>
    <div id="photos">
        .. contents of /modules/photos/photos.html appended in here
    </div>
    <div id="login">
        .. contents of /modules/login/login.html appended in here
    </div>
    <div id="timeline">
        .. contents of /modules/timeline/timeline.html appended in here
    </div>
</body>
</html>
```
  

  

Concatenation vs Caching
------------------------

  
At this stage I was able to build a sample app with my re-usable modules and a view. I thought it would be useful to concatenate all the JS and CSS files together for each view. It turns out I was wrong.  
  
In a situation where you're reusing modules across multiple views concatinating per view makes no sense because you end up serving the same CSS across multiple URLs. The CSS/JS will be cached per view, not per module.  
  
I decided it was actually better to use the URLs generated for the CSS/JS by the modules so they can be cached at the most granular level.  Both methods will be possible.  Currently CSS modules are served inline with the module HTML (not the document HEAD).  There will be some work to ensure that all CSS LINK tags are moved to the document HEAD before the view is rendered. [JSDOM](https://github.com/tmpvar/jsdom) should make that quite easy.  

History API
-----------

  
With views and modules defined on the server I've started to put together a front end framework which can consume the same application specification and make the whole experience a bit more pleasant.  I'm currently experimenting with generating popstate listeners from the specification which can then fire off the default/custom transitions between views.  

Whats going on here?
--------------------

  
Essentially I have started building a framework for mixing up reusable modules of HTML/CSS/JS in ways usually associated with Javascript applications but with progressive enhancement as one of its core values.  
  
The functionality described above will almost certainly change.  What I have built so far is a simple proof of concept to test the best way to define views in this way using Sizlate.  
  
At the moment I'm working on a sample app pulling in data from Flickr to demonstrate how it might all fit together in the real world.  Its pretty messy and requires lots of work but you can see the code [here](https://github.com/simonmcmanus/framework).  
  
I thought it was worth blogging about my approach just to get some feedback. Please do let me know what you think. All idea's, contributions, criticisms welcomed.  
  
I'm going to be talking about Sizlate at the London Node user group on the 25th January at the Forward Offices in Camden, London. [Please register here if you would like to attend.](http://lnugjanuary12.eventbrite.co.uk/)

        