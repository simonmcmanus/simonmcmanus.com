---
date: 2007-08-08
title: Getting your friends out of facebook
tags: ["API","BT","Facebook","Osmosoft","SimonMcManus","web20","post"]
---
  
```js
The code below lists the names of all your facebook contacts.  Quite handy....
```
  
```js
<?
```
  
```js
$friends = $facebook->api\_client->friends\_get();
```
  
```js
  
foreach($friends as $friend)
```
  
```js
{
```
  
```js
    $name = $facebook->api\_client->users\_getInfo($friend,'name, status, hometown\_location.city');
```
  
```js
    echo $name\[0\]\[name\].'<br />';
```
  
```js
}
```
  
```js
?>
```
  
Keep an eye on the blog to see how I evolve this script.

        