---
date: 2007-10-17
title: Output text into a Tiddler without changing the tiddler - macro
tags: ["macro","Osmosoft","tiddler","tiddlywiki","post"]
---
This macro combines the last two posts with a new bit of code from Phil Hawksworth. The code lets you output text into the a tiddler using a macro, without actually changing the contents of the tiddler.  
  
So the end result is that output from the .php file is shown in any macro which contains <<ccConfig>> but the tiddler content is not actually change.  
  
The aim here is to be able to manage users and your config for ccTiddly from Tiddlers.  

  

  
```js
/\*\*\*
|''Name:''|ccConfig|
|''Description:''|Lets you configure ccTiddly|
|''Version:''|2.0.3|
|''Date:''|Sep 22, 2006|
|''Author:''|SimonMcManus|
|''License:''|\[\[BSD open source license\]\]|
|''~CoreVersion:''|2.1.0|
|''Browser:''|Firefox 1.0.4+; Firefox 1.5; InternetExplorer 6.0|
\*\*\*/
    config.macros.ccConfig = {
        handler: function(place,macroName,params,wikifier,paramString,tiddler) {
    
            function callback(status,params,responseText,xhr) {
                    createTiddlyLink(place,responseText,true);
            }
            params = {};
            params.title =tiddler.title;
            var a = doHttp('GET', 'http://127.0.0.1/cctw\_tw/cctiddly/handle/index.php',null,null,null,null,callback,params);
        }
    }
```
  