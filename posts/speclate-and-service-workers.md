---
date: 2016-10-12
title: Speclate and Service Workers
tags: null
---
I have alway been keen to provide a good offline experience for the [London Node user group](http://lnug.org) website. I’m pretty bad with directions and London is even worse with internet coverage. Knowing I can always get the map and address on my phone is very handy. We already use AppCache with the help of [app-cache-nanny](https://github.com/gr2m/appcache-nanny) but with its upcoming [depreciation](https://www.fxsitecompat.com/en-CA/docs/2015/application-cache-api-has-been-deprecated/) I wanted to investigate how service workers might improve the whole experience.  
  
[Speclate](http://github.com/simonmcmanus/speclate) is the tool we use to build the static LNUG website, it uses [Sizlate](http://github.com/simonmcmanus/sizlate) which is a basic templating engine allowing data to be inserted into HTML using the Sizzle selector engine from jQuery.  
  
In this example we take a HTML string and modify the innerHTML of the h1 element:  
  
https://gist.github.com/simonmcmanus/17e23f4bb3c3cd9e0afdcf09e11b226e#file-init-offline-js  
  
https://gist.github.com/simonmcmanus/903b0ce6d2cb190bfbc4a50cc57c0b36  
  
Sizlate can also take a DOM node when running in the browser:  
  
https://gist.github.com/simonmcmanus/5d19c1918d0a58790f3040dac8afbb5d  
  
Sizlate uses [Cheerio](https://github.com/cheeriojs/cheerio) to provide a fast DOM implementation at build time, in the browser it  needs something with jQuery like API to access to the DOM.  
  
Speclate extends Sizlate with the idea of components and pages.  A spec.js file sits in the project root and defines the sites structure. Notably how the routes, pages, components and data all fit together. The exported Javascript object is used to combine the various HTML files that make up the pages. At build time it renders static HTML files for each page but it can also render just the parts of the page that change as users navigate around the site.  
  
Here is a simple spec for a site with two pages:  
  
https://gist.github.com/simonmcmanus/d91ca1949a91a49669d80d60ab49e9a9  
  
Given that spec, three files need to be present:  

  
*   ./pages/home/home.html
  
*   ./pages/contact/contact.html
  
*   ./pages/layout.html
  

  
Those paths are all relative to the spec.js file which should sit in the root of a project.  
  
Here is a slightly more complicated site spec, it makes use of components and global selectors. Components are defined in the spec and only applied to the page (not the layout). The selectors are applied to the whole page after it has been appended to the layout which means you can modify things like the page title:  
  
https://gist.github.com/simonmcmanus/afd3f2a0355f17b0f1efa7f739b9e41a  
  
In this example it also uses the ‘contact’ component which needs to contain an li element and should be located at:  
  
./components/contact/contact.html  
  
You can see the full LNUG site spec here:  
  
[https://github.com/lnug/website/blob/master/spec.js](https://github.com/lnug/website/blob/master/spec.js)  

Application Shell - layouts
---------------------------

  
[Speclate](https://github.com/simonmcmanus/speclate) requires a pages/layout.html file which contains the outer layout for a site. The layout usually contains the nav, header and footer. For the LNUG site the markup in the layout.html file produces this:  
  
![screen-shot-2016-10-08-at-07-30-42](https://simonmcmanus.files.wordpress.com/2016/10/screen-shot-2016-10-08-at-07-30-42.png)  
  
layout.html contains an element with id of container which the page content is inserted into. The first time you visit a site you’re served the layout as part of the complete page generated at build time. As you browse to routes defined in the spec, [speclate-router](https://www.npmjs.com/package/speclate-router) reuses the layout and just updates the contents of the #container element with the new page and its components. By reusing the page layout we only render the parts of the page that change. This isn’t done with any clever virtual DOM diffing, we just know which parts of the page are going to change from the spec, and only change those parts. By not re-rending elements that don’t change it’s much easier to make smooth transitions between pages.  
  
[Service workers](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API) allow us to cache the layout.html file for all the routes defined in the spec. When a user hits a route it loads layout.html from the cache. The Javascript in layout.html triggers speclate-router to try and fetch the latest spec for the page and render it. This provides an application shell which can show the main nav to a returning visitor in under 300ms. It works well but I wonder if we could be even more efficient by only creating one cache entry for /pages/layout.html and referencing that when we intercept the fetch requests.  

Partial updates
---------------

  
When making a change to the LNUG site using appCache, Speclate modifies a version hash in the appcache.manifest file. AppCache nanny detects the change and updates everything in the browser cache. The LNUG layout, pages, components and CSS files rarely change but the site gets updated several times each month with new information about speakers and their talks. That’s probably more often than most users visit the site.  
  
Busting the whole cache each time we make a minor change is in not making efficient use of our user’s cache.  

Long live the Service Worker
----------------------------

  
Service workers can intercept fetch requests which allows us to be far more efficient with the user’s cache. With Speclate 7.0 when you generate a site it creates a .json file in docs/speclate/api for each page defined in the spec. Each file contains just the information needed to render the page. For the current LNUG homepage the spec [looks like this](https://github.com/lnug/website/blob/master/docs/api/speclate/index.json).  
  
[speclate-service-worker](https://www.npmjs.com/package/speclate-service-worker) uses a network first strategy for requests to the speclate/api folder. Every time a user loads a page it tries to get the latest JSON page spec from the server. If the user is offline, it falls back to the cache. All other requests are served straight from the cache. By only loading a small spec file from the server we are able to present a fully rendered site with the latest data from the server over a throttled 2g connection in just over a second. By not busting the whole cache for regular updates we can keep the service worker until we want to make changes to the page, component and CSS files. This ensures we always serve the latest info while at the same time dramatically reducing the amount of data a returning visitor has to download. Speciate-Router and speclate-service-worker are both focused around loading the whole site into the service worker and rendering it from there (after first page load of course). This only works with very small sites but with some tweaks they could both handle partial loading.  

Support
-------

  
We don’t want to drop appCache, the LNUG analytics show there are users who don’t have service workers available. Here is the code we use to check if services workers are available, falling back to appCacheNanny when they’re not:  
  
https://gist.github.com/simonmcmanus/c85cfe81eb45dd9aed52321d463469a4  
  
Note how the appCache nanny on ‘updateready’ sits outside of the else statement, this ensures returning visitors with appCache and services workers available are upgraded to use service workers.  
  
Returning visitors are shown the layout while the server is checked for updates. This can result in the footer being visible and then disappearing to the bottom of the page when the content is loaded. That should be resolved with the addition of some nice CSS transition. ([we have an open issue btw](https://github.com/lnug/website/issues/132))  
  
This implementation has an interesting side effect. If a user turns Javascript off after loading the site with Javascript and service workers enabled they will only see the layout. The page content will never load. All the Javascript resources are being loaded from the cache so the Javascript will never fail due to network conditions and we have static HTML files to revert to if the Javascript fails to load for some other reason.  
  
Speclate ensures everything is defined and maintained once in the spec file which helps bring down the cost of these layered enhancements. We start off with completely static HTML files. If the browser supports [history.pushstate](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method) client-side routing is provided. If the browser supports service workers returning visitors get a really fast experience on and offline. If they don’t, well, it’ll still work offline with appCache support.  
  
If you would like to try Speclate I‘ve updated the example app to use service workers:  
  
[https://github.com/simonmcmanus/speclate-example](https://github.com/simonmcmanus/speclate-example)  
  
Please let me know if you have any comments, feedback or questions. Im also very grateful to all those who have blogging about service workers, notably, [Jake Archibald](https://jakearchibald.com/), [Jeremy Keith](https://adactio.com/journal/9775) and [Lyza Danger Gardner](https://www.smashingmagazine.com/2016/02/making-a-service-worker/). Getting the LNUG site working with service workers was much easier thanks to your articles and sample code. :)

        