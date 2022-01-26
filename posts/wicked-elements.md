---
date:  2019-12-03 
title: Wicked Elements
tags: ["customElements","web","post"]
---

[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) give us the ability to create custom html tags that you can use in your markup like so:  

```html
<word-count> 
```


```js
customElements.define('word-count', WordCount, { extends: 'p' });
```


But to use the above tag on a page the browser still needs to run some Javascript before it can render the custom element. The browser also needs to [support custom elements](https://caniuse.com/#feat=custom-elementsv1) to render anything at all.

 So the Progressive Enhancement story isn't great, and its for this reason I've often avoided custom elements.


With [Wicked Elements](https://github.com/WebReflection/wicked-elements) you can bind the component behaviour using css selectors. As we are not using the tag name to select which elements on the page to apply the behaviour to, we can send standard html tags in the initial request and the client side javascript just enhances them with interactivity afterwards.

So our component gets sent to the browser like so: 

```html
<p is="word-count">12</p> 
```
In this case using the `is` attribute selector seems to work really nicely: 

```js
wickedElements.define('[is=word-count]', ...)
```

This means we can send markup that works for the lowest possible tech (a <code><p></code> tag). There is no hydration or anything other re-rendering when the browser js kicks in.  The browser javascript just makes the existing elements interactive. Kinda how progressive enhancement is meant to work.

Wicked elements isn't the same as custom elements, but does provide a similar API (except for how you select the elements). The thing I like about Wicked elements is that it doesn't make assuptions about how the markup is rendered, it just enhances the markup that has already been rendered. 

I think its actually [regular elements](https://github.com/WebReflection/regular-elements) that adds the ability to bind behaviour with a css selector. Wicked elements combines a couple of extra modules to make things a bit easier.


I've been playing with it alongside [Speclate](https://www.npmjs.com/package/speclate) which also uses CSS selectors so there are some very nice parallels, but that's a whole post in its own right. :)  

        