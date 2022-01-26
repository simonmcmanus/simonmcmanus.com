---
date: 2016-08-13
title: Speclate
tags: ["progressive enhancement","sizlate","speclate","static sites","post"]
---
The [London Node User group website](http://lnug.org) is a static site hosted on [github pages,](https://pages.github.com/) it renders at build time, in the browser and works offline using [Speclate](http://github.com/simonmcmanus/speclate).  
  
The idea behind [Speclate](https://github.com/simonmcmanus/speclate) is you have a single file (a spec) which defines how your routes, pages and components fit together. A spec can be used to generate a static site and lots more too.  With the help of [speclate-router](https://github.com/simonmcmanus/speclate-router) we generate a router which swaps out the appropriate HTML elements to transition nicely between pages.  
  
Let's look at a simple example:  
```js
module.exports = {  
     '/': {  
         page: 'home',  
         selectors: {  
             title: 'Home',  
             'a.home': {  
                 className: 'active'  
             }  
         }  
     },  
     '/contact.html': {  
         page: 'contact',  
         selectors: {  
             title: 'Contact',  
             'a.contact': {  
                 className: 'active'  
             }  
        }  
     }  
};
```
  
This spec will produce index.html and contact.html based on the contents of [/pages/home/home.html](https://github.com/simonmcmanus/speclate-example/blob/master/pages/home/home.html) and [/pages/contact/contact.html](https://github.com/simonmcmanus/speclate-example/blob/master/pages/contact/contact.html) and the values in the selectors object.  
  
At the moment Speclate relies on a couple of conventions. [/pages/layout.html](https://github.com/simonmcmanus/speclate-example/blob/master/pages/layout.html) needs to contain an element with an id of "container"for the pages to be appended to. This will move to config eventually.  
  
I've created a[ simple example app](https://github.com/simonmcmanus/speclate-example). You can see the [demo running](http://speclate-example.netlify.com/) on [Netlify](http://netlify.com), and get the [source code on](https://github.com/simonmcmanus/speclate-example) [GitHub](https://github.com/simonmcmanus/speclate-example). You can also read more about the spec format in the [speclate ](https://github.com/simonmcmanus/speclate)[readme](https://github.com/simonmcmanus/speclate).  

Rendering
---------

  
Underneath the hood Speclate uses [Sizlate](https://github.com/simonmcmanus/sizlate) which makes extensive use of [Sizzle](https://sizzlejs.com), the selector engine from jQuery.  On the server, [Cheerio](https://github.com/cheeriojs/cheerio) provides a fast DOM implementation for generating the markup.  
  
Rendering can be broken down into three steps. Firstly we replace the main page (using #container), then we apply the page spec, this will apply selectors and components to the page and lastly we apply the global selectors to the markup. This allows us to effect elements in the main layout such as the page title.  
  
In the example there are three commands in the [package.json](https://github.com/simonmcmanus/speclate-example/blob/master/package.json) to generate the[ site](http://speclate-example.netlify.com/):  
```js
"scripts": {
    "markup": "speclate",
    "client": "browserify ./client/router.js > ./client/router-compiled.js",
    "build": "npm run client && npm run markup"
}
```
  
'npm run markup' will generate a functional HTML site. 'npm run client' uses browserify to generate the [client-side router](https://github.com/simonmcmanus/speclate-example/blob/master/client/router.js) and 'npm run build' generates the whole site by running both commands.  

Offline
-------

  
Currently, the [LNUG](http://lnug.org) website works offline using an [AppCache.manifest](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) file. That file is generated from the spec like so:  
```js
speclate.site.appCache(spec, [  
'/css.css',  
'/images/lnug-logo.svg'  
])
```
  
We use [appCache Nanny](https://github.com/gr2m/appcache-nanny) to handle updates but the experience is still not great. The latest releases of Speclate now use the fetch API so it opens up lots of possibilities with Service Workers.

        