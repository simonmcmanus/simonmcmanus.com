---
date: 2013-01-03
title: Forcing Garbage Collection with Node.js and V8
tags: null
---
I'm in the middle of looking for some memory leaks at the moment, in order to isolate them I wanted to confirm exactly how much memory was being used by a given line of code after garbage collection.  
  
Fortunately V8 allows you to manually force garbage collection from within Javascript.  
  
When you run your node script just add the option: '--expose-gc'  
  
e.g:  
  
```js
node --expose-gc test.js
```
  
  
And then from within the Javascript just do:  
  
```js
global.gc();  

```
  
That's it, good luck finding those leaks!

        