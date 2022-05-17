---
date: 2022-14-05
title: Recursive selectors in Sizlate
tags: ["sizlate", "nested", "recursion", "blog", "js", "post"]
---


Previously nested selectors in [sizlate](https://github.com/simonmcmanus/sizlate) were limited to one level and didn’t provide all the functionality available to top level selector. 

In [sizlate@4.1.0](https://www.npmjs.com/package/sizlate) nested selectors now work exactly the same as top level selectors and there is no limit on nesting depths. 

What does this look like:

```js
const selectors = {
  "ul#list-two": {
    selectors: {
      "li.welcome": {
        class: "highlight",
        selectors: {
          "span.name": "Simon"
        }
      }
    }
  }
};

```


Transforms this HTML: 

```html
<ul>
    <li>list one</li>
</ul>

<ul id="list-two">
    <li>list two</li>
    <li class="welcome">
      Hello <span class="name">John</span>
    </li>
</ul>
```

Into this HTML:


```html
<ul>
    <li>list one</li>
</ul>

<ul id="list-two">
    <li>list two</li>
    <li class="welcome highlight">
      Hello <span class="name">Simon</span>
    </li>
</ul>
```

I've create an example on 
[CodeSandbox](https://codesandbox.io/s/sizlate-nested-cix0y7) where you can try it out and easily fork the code. 


This was only a minor release because it just fixes issues and doesn't change the interface. In a future (major) release I will attempt to remove the need for the word selectors so much by making the default object behaviour be selectors, if that happens attributes would need to be explictly declared in the way selectors are in the example above. 


This came up when I was porting [simonmcmanus.com](http://simonmcmanus.com) over to using eleventy with sizlate for the templating, it makes sizlate much more capable of handling complex templating requirements.