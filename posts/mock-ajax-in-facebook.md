---
date: 2007-08-01
title: Mock Ajax in Facebook
tags: ["ajax","API","Blog","BT","Facebook","Facebook Application","fbml","mock ajax","Osmosoft","PHP","SimonMcManus","post"]
---
This example simply sends the variable specified in the text area to response.php and then displays the result from response.php in the facebook window without reloading the main page.  
  
In this particular example response.php only returns the same variables but this will be the underlying structure for many facebook apps. To use this example place the below fbml into the small default fbml box when editing the application info.  

  
```js
<fb:subtitle>Simple FBML</fb:subtitle>
```
  
```js
<form id='form'>
```
  
```js
<div id="preview" style="border-style: solid; border-color: black;   border-width: 1px; padding: 5px;"></div>
```
  
```js
<textarea name="data"></textarea>
```
  
```js
<input type="submit" clickrewriteform='form'  clickrewriteurl="http://osmosoft-php.com/facebook/simple/response.php"  clickrewriteid="preview" value=" get response"/>
```
  
```js
</form>
```
  
then response.php contains :  
```js
<?php
  
	echo $\_POST\['data'\];
  
?>
```
  
for more info please see :  
  
[http://wiki.developers.facebook.com/index.php/Mock\_ajax](http://wiki.developers.facebook.com/index.php/Mock_ajax "http://wiki.developers.facebook.com/index.php/Mock_ajax ")

        