---
date: 2007-10-16
title: Macro template for TiddlyWiki
tags: ["tiddlywiki","post"]
---
This code provides a template for creating Macros. When tagged systemConfig this macro can be called  using <<exampleplugin>>  

  
```js
/***
|''Name:''|ExamplePlugin|
|''Description:''|To demonstrate how to write TiddlyWiki plugins|
|''Version:''|2.0.3|
|''Date:''|Sep 22, 2006|
|''Source:''|http://www.tiddlywiki.com/#ExamplePlugin|
|''Author:''|SimonMcManus|
|''License:''|\[\[BSD open source license\]\]|
|''~CoreVersion:''|2.1.0|
|''Browser:''|Firefox 1.0.4+; Firefox 1.5; InternetExplorer 6.0|
***/
config.macros.exampleplugin = {
    handler: function() {
        alert('here');
    }
}
```
  
