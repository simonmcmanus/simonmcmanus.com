---
date: 2007-10-16
title: Macro template for TiddlyWiki
tags: ["tiddlywiki","post"]
---
This code provides a template for creating Macros. When tagged systemConfig this macro can be called  using <<exampleplugin>>  

  
```js
/\*\*\*
```
  
```js
|''Name:''|ExamplePlugin|
```
  
```js
|''Description:''|To demonstrate how to write TiddlyWiki plugins|
```
  
```js
|''Version:''|2.0.3|
```
  
```js
|''Date:''|Sep 22, 2006|
```
  
```js
|''Source:''|http://www.tiddlywiki.com/#ExamplePlugin|
```
  
```js
|''Author:''|SimonMcManus|
```
  
```js
|''License:''|\[\[BSD open source license\]\]|
```
  
```js
|''~CoreVersion:''|2.1.0|
```
  
```js
|''Browser:''|Firefox 1.0.4+; Firefox 1.5; InternetExplorer 6.0|
```
  
```js
\*\*\*/
```
  
  

  
```js
config.macros.exampleplugin = {
```
  
```js
handler: function() {
```
  
```js
alert('here');
```
  
```js
}
```
  
```js
}
```
  
