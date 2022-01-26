---
date: 2011-11-22
title: Sizlate
tags: ["osmososft","post"]
---
Over the past year I have been experimenting with [Node.js](http://nodejs.org/). Its been a pretty interesting journey and I have learned a great deal.  
  
One of my more interesting experiments has been [Sizlate](https://github.com/simonmcmanus/sizlate/).  
  
On projects at work I often find myself doing things like this:  
```js
domNode.find('div.class').html('<b>INSERT SOME STUFF HERE</b>'); 
```
  
It's a really powerful way to populate HTML. What I really like is that there is no need to add any crazy syntax into my templates.  Templates are just valid HTML and the point of insertion is specified by the jQuery selector.  
  
From the developers point of view this is really simple, it does however introduce problems when Javascript is not turned on. I found myself wondering how this technique might be transferred onto the server.  
  
After some experimentation I came up with [Sizlate](https://github.com/simonmcmanus/sizlate/). A HTML templating engine for Express.js.  
  
Its pretty easy to get jQuery running on Node.js but I decided that  jQuery wasn't  a good fit for my use case.  [Sizzle](http://sizzlejs.com/ "sizzle") is the selector engine used by jQuery, I decided to investigate using Sizzle to provide the selector functionality. It turned out that this works quite nicely using the J[SDOM](https://github.com/tmpvar/jsdom) project.  
  
To use Sizlate you simple need to register it as your templating engine:  

```js
var sizlate = require('sizlate'); 
app.register('.html', sizlate);
```
 
  
And then just call res.render as you would normally with Express:  
 
```js
res.render('template.html',  { selectors: { 'a': 'hi there' } });
```
  
That's the most basic example. On github I have provided an [example](https://github.com/simonmcmanus/sizlate/tree/master/examples) of  [passing sizlate an object](https://github.com/simonmcmanus/sizlate/tree/master/examples/object) allowing more complex data structures to be used. There is also an [example using partials](https://github.com/simonmcmanus/sizlate/tree/master/examples/partial).  
  
At the moment Sizlate only works on the serverside but it should be quite easy to get it working in the browser.  
  
Feel free to have a play and let me know if you have any feedback.  
  
Sizlate is available as a NPM package and can be installed using the command:  
```js

NPM install sizlate
```
 
    
For more details please read the [readme on github.com.](https://github.com/simonmcmanus/sizlate)

        