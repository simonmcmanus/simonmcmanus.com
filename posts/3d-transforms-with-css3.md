---
date: 2011-01-05
title: 3D Transforms with CSS3
tags: ["3d","CSS3","css3","post"]
---
Over Christmas I started moving [simonmcmanus.com](http://simonmcmanus.com "Simon McManus homepage") over to [node.js](http://nodejs.org/) making some tweaks to the CSS as I went. I wanted to examine the z-index of my page so decided to investigate CSS3 3D transformations. I won't be launching the new [simonmcmanus.com](http://simonmcmanus.com) for a while but here is what I found out about 3D CSS transformations.  
  
The following examples only work on the latest webkit browsers (Chrome and Safari). In Chrome you will need to enable "GPU Accelerated Compositing". Goto [about:flags](flags) turn on "GPU Accelerated Compositing" and then restart Chrome.  
  
I started off with one of [Paul Hayes early experiments](http://www.paulrhayes.com/experiments/perspective/) which later progressed into his [animated cube demo.](http://www.paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/)  
  
[Here is what I came up with.](http://simonmcmanus.com/stuff/css3/rotate/standalone/index.html)  
  
Screenshots:  
  
[![](https://simonmcmanus.files.wordpress.com/2011/01/1.png?w=300 "1")](https://simonmcmanus.files.wordpress.com/2011/01/1.png)  
  
[![](https://simonmcmanus.files.wordpress.com/2011/01/2.png?w=300 "2")](https://simonmcmanus.files.wordpress.com/2011/01/2.png)  
  
[![](https://simonmcmanus.files.wordpress.com/2011/01/3.png?w=300 "3")](https://simonmcmanus.files.wordpress.com/2011/01/3.png)  
  
This is what I did:  

### Step 1: Create the 3d space

  
Wrap two divs round the elements to appear in 3D :  
```js
<div id="perspective">
  
   <div id="rotator">
  
      <!--original HTML in here-->
  
   </div>
  
</div>
```
  
Set the following CSS:  
```js
.perspective { -webkit-perspective: 2400; }
.three-d { -webkit-transform-style: preserve-3d; }
```
  

### Step 2: Setting translateZ

  
Set translateZ for each item to appear 3D:  
```js
-webkit-transform: translateZ(3em);
```
  
In my example I set it for the following items:  
```js
h1,
.item,
.twitter-bird.sign,
.vcard{
   -webkit-transform: translateZ(3em); 
}
```
  
In this case each z-index will be represented by 3ems.  

### Step 3: Making it move

  
Define the animation :  
```js
#rotator {
   -webkit-animation-name: rotate;
   -webkit-animation-duration: 15s; 
   -webkit-animation-iteration-count: infinite;
}
```
  
And then specify the steps of the animation:  
```js
@-webkit-keyframes rotate {
    0% {
       -webkit-transform:rotateY(0deg); 
   }
   5% {
      -webkit-transform:rotateY(0deg);
   }
   30% {
      -webkit-transform:rotateY(-40deg);
   }
   50% {
      -webkit-transform:rotateY(85deg);
   }
   55% {
      -webkit-transform:rotateY(85deg);
   }
   90% {
      -webkit-transform:rotateY(0deg);
   } 
}
```
  
[demo here.](http://simonmcmanus.com/stuff/css3/rotate/standalone/1.html "rotate demo")  

### Step 4 ..  Perspective

  
To give a zoom effect I created a second animation:  
```js
#perspective { 
   -webkit-animation-name: perspective;
   -webkit-animation-duration: 15s;
   -webkit-animation-iteration-count: infinite;
 }
```
  
```js
@-webkit-keyframes perspective {
   0% {
      -webkit-perspective: 2400;
   }
   5% {
      -webkit-perspective:2400;
   }
   30% {
      -webkit-perspective:650;
   }
   50% {
      -webkit-perspective:2000;
   }
   55% {
      -webkit-perspective:2000;
   }
   70% {
      -webkit-perspective: 2400;
   }  
}
```
  
[final demo](http://simonmcmanus.com/stuff/css3/rotate/standalone/index.html "final demo")  
  
That's what I've done so far. Comments and modifications welcomed.  
  
Happy New Year

        