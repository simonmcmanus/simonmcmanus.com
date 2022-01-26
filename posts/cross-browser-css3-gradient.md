---
date: 2011-04-05
title: Cross Browser CSS3 Gradient
tags: ["osmososft","post"]
---
Publishing this here for my own convenience.  
```js
background: #FF8D2C; /\* for non-css3 browsers \*/
  
/\* For WebKit (Safari, Google Chrome etc) \*/
  
background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#FF8D2C));
  
/\* For Mozilla/Gecko (Firefox etc) \*/
  
background: -moz-linear-gradient(top, #FFFFFF, #FF8D2C);
  
/\* For Internet Explorer 5.5 - 7 \*/
  
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFF, endColorstr=#FF8D2C);
  
/\* For Internet Explorer 8 \*/
  
\-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFFFF, endColorstr=#FF8D2C)";
```

        