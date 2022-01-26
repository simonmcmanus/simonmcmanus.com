---
date: 2011-02-11
title: Building on the Web
tags: ["hashbang","javascript apps","osmososft","progressive enhancement","pushState","web apps","post"]
---
**Foundations**  
  
When building a house the foundations are fundamental to it's structural integrity. Without good strong foundations the house is weak and liable to fall over at any moment.  
  
Things on the web also have foundations in the form of HTML and URIs.  JavaScript can then be layered on top to improve the experience. It's called progressive enhancement and people seem to be forgetting about it these days.  
  
It's pretty simple, build your HTML and CSS  first and then override the default behaviours with JavaScript.  This will ensure you are building on solid foundations.  
  
When generating HTML on the server, you can easily re-use it with JavaScript. Its far better than generating the HTML in the browser (with JavaScript) and either ignoring Search engines or having to duplicate your logic on the server for SEO, accessibility and things like RSS feeds.  
  
  
  
Here are some rather sweeping statements:  
  
**1.** JavaScript should NEVER be used to process data in the browser.  
  
**2\.** JavaScript should rarely be used in the browser to generate html (sharing code with server-side JavaScript is acceptable).  
  
I did warn you they were rather sweeping.  
  
I've heard it said that if you want to provide an app/flash like experience you need to use JavaScript to render your pages: You need to build single page JavaScript apps.  
  
history.pushState() tells us otherwise. You can read about it [here](https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history "history.pushState docs").  
  
Basically it makes it possible for what we now call single page web apps to exist across multiple pages while still providing nice page transitions (no page refresh).  
  
**history.pushState() - A Fallback**  
  
History.pushState is all well and good but it's only available in WebKit and Firefox(4) at the moment.  Maybe that is why people are seeing [hashbangs](http://www.isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs) as an alternative solution. Personally I would rather fallback to a fragment identifier (#) only in situations where history.pushState is not available.  
  
There would need to be a bit of JavaScript at the top of each page redirecting users to the appropriate fragment identifier in browsers that do not support pushState.  
  
So when pushState is not available:  
  
http://simonmcmanus.com/page.html  
  
might redirect to :  
  
http://simonmcmanus.com#page.html  
  
which would then go and fetch the contents from  
  
http://simonmcmanus.com/page.html  
  
If a page is loaded with the fragment identifier in a browser that supports pushState the hash should be removed and pushState used.  
  
**Summary**  
  
When you require JavaScript for templating and data processing you are on a very slippery slope to writing JavaScript applications.  
  
We have for a long time been able to obfuscate our data with technologies like Flash, I for one have avoided these technologies because I believe that when we publish data properly on the web it becomes more re-usable, findable, accessible and actually has far greater potential.  
  
By all means use JavaScript, but please don't rely on it.

        