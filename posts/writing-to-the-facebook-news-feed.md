---
date: 2007-09-15
title: Writing to the Facebook News feed.
tags: ["API","BT","Facebook","Osmosoft","SimonMcManus","post"]
---
I have been modifying the mock [ajax example.](http://simonmcmanus.wordpress.com/2007/08/01/mock-ajax-in-facebook/ "mock ajax example") This code is used in response.php, it takes two variables which need to be posted in through forms. This code requires facebookid and viewer\_facefacebookid to be passed in from a form to look up the names and then the data is sent in from the data variable.  
```js
require\_once('appinclude.php');
```
  
```js
$name\_to = $facebook->api\_client->users\_getInfo($\_POST\['facebookid'\],'name, pic\_small');
```
  
```js
$name\_from = $facebook->api\_client->users\_getInfo($\_POST\['viewer\_facebookid'\],'name, pic\_small');
```
  
```js
$title = $name\_to\[0\]\[name\].' was sent the following text by '.$name\_from\[0\]\[name\].' from the <a href=http://apps.facebook.com/mojomob>Mojo Application</a>';
```
  
```js
$body = $\_POST\['data'\];
```
  
```js
$facebook->api\_client->feed\_publishStoryToUser($title, $body);
```
  
```js
$facebook->api\_client->feed\_publishActionOfUser($title, $body);
```
  
```js
exit;
```

        