---
date: 2007-10-16
title: The most simple AJAX call in TiddlyWiki
tags: null
---
When tagged system config this script loads the content of the .php file and displays it as an alert.  
```js
//{{{
```
  
```js
function callback(status,params,responseText,xhr)
  
 {
  
 alert(responseText);
  
 }
```
  
```js
var a = doHttp('GET', 'http://127.0.0.1/cctw\_tw/cctiddly/handle/index.php',null,null,null,null,callback);
```
  
```js
//}}}
```

        