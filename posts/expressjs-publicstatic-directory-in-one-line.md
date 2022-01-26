---
date: 2012-04-12
title: Express.js public/static directory in one line
tags: null
---
  
If you want to serve a static directory from express you can do it with the following line of code.  

  

  
The first parameter is the route, the second parameter is the path to the directory.  

  
  
```js
  
 
```js
app.use('/public', express.static(__dirname + '/public'));
```
 
  

```
  
  
Posting here for my own convenience.

        