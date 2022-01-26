---
date: 2019-08-27
title: Speclate@19
tags: ["speclate","  sizlate"," sizzle"," pagejs"," routing"," router"," offline","post"]
---

I've made some big changes to speclate and sizlate recently. The API stays the same, but under the hood things are much leaner.

### No more sizzle

Previously sizlate required [sizzle](https://sizzlejs.com/) to operate in the browser, this meant using jQuery or something similar. With support for `querySelectorAll()` being [so good](https://caniuse.com/#feat=queryselector) we can now do all our dom selection/manipulation with just speclate. At build time speclate still uses [cheerio](https://cheerio.js.org/) to provide the dom functions it needs to render the pages and components.

### No more Page.js 
  
Page.js helped me get speclate-router up and running quickly, at that time, just running speclate in the client seemed a long way off. 

### Speclate-router will be  deprecated 

Version 9 will be the last standalone version of `speclate-router`. From @19, Speclate includes a dramatically similified router, which can be included like so: 

```
var router = require('speclate/router')
```

The router will behave exactly as it did before. Just with a lot less code. When the router is loaded it looks for any links on the page that match the routes specified in the spec. When it finds one, it binds to the link click so speclate  can handle swapping out the pages with the appropriate transitions. 


### Smarter Service workers 

Previously the spec was broken up to the relevant pieces at build time, but the generated service worker javascript file would still pull in a full copy of the spec, effectively meaning that each user would download the spec twice. 

This has now changed so that `speciate-cli` generates a minimal version of the spec, effectively just containing a list of the pages and components that are used by that page, so that they can be made available offline. 


The changes described above are introduced in versions: 

* speclate@19.x.x
* speclate-service-worker@3.x.x
        