---
date: 2022-06-11
title: Eleventy Layouts with Sizlate
tags: ["eleventy", "sizlate", "blog", "templating", "post", "web", "layouts"]
---
In this post I'm going to describe the different ways I was able to use sizlate query selectors in [eleventy](https://www.11ty.dev/). 

I created a very small wrapper called [eleventy-sizlate](https://www.npmjs.com/package/eleventy-sizlate). I mainly created this package to migrate this blog over to eleventy but I still find Sizlate my prefferred method for manipulating html.

This was my first time using eleventy so if you can see any APIs missing or other improvements please let me know. 

## Example 1 - A Simple Layout

First thing to do is create a layout file, this is the file which supplies the html file and selectors for the outer layout. In the below example I've inlined everything to make it easier to read:


```js 

////_includes/layouts/layout.sizlate.11ty.js
const eleventySizlate = require('eleventy-sizlate')
const template = `
<html>
    <title></title>
    <body>
        <h1></h1>
        <div id="container"></div>
        <nav>
            <a href="/example-1/">example 1</a>
            <a href="/example-2/">example 2</a>
            <a href="/example-3/">example 3</a>
            <a href="/example-4/">example 4</a>
        </nav>
    </body>
</html>`

const mappers = {} // we will use this in example 3.

class Sizlate {
    data = {
        template,
    };

    render(data) {
        const layoutSelectors = {
            'h1': data.title,
            'title': data.title,
            '#container': data.content,
        }
        return eleventySizlate.render(data, layoutSelectors, mappers)
    }
}

module.exports = Sizlate;

```
Once we have the basic template, we can consume it from another file in eleventy like so: 


```markdown
---
title: Simple layout
layout: layouts/layout.sizlate.11ty.js
---
This example shows how to use a simple layout with sizlate, it will wrap this markdown file in the layout and update the titles.
```




Which would produce the following output: 

```html 

<html>
    <title>Simple layout</title>
    <body>
        <h1>Simple layout</h1>
        <div id="container">
            <p>This example shows how to use a simple layout with sizlate, it will wrap this markdown file in the layout and update the titles.</p>
        </div>
        <nav>
            <a href="/example-1/">example 1</a>
            <a href="/example-2/">example 2</a>
            <a href="/example-3/">example 3</a>
            <a href="/example-4/">example 4</a>
        </nav>
    </body>
</html>
```


## Example 2 - Using sizlate object in layouts

In the front matter data you can also specify sizlate selectors to manipulate the html, in this example we add a testPage class to the html tag: 


```markdown
---
title: Test page
layout: layouts/layout.sizlate.11ty.js
sizlate: { 'html': {
    className: 'testPage'
}}

---
* list item 1 
* list item 2 
```

## Example 3 - Mapper Functions


Sometimes static selectors like the above don't quite cut it, you might need to generate selectors based off of data. This is where we can use mapping functions. 

Let's say we have an array of tags in the template data and we want to transform that into a list. 
With sizlate static selectors we saw eariler we would just add it to the sizlate object in the front matter like so: 

```markdown
---
layout: layouts/layout.sizlate.11ty.js
sizlate: { 'ul': ['bacon', 'cheese']}
---
* list item
```

But if you want to generate the selectors based on the front matter data you can add a mapper function to the main template: 


```js 
const mappers = {
    tags: (data) => 'ul': data.tags
}
```
That data object that gets passed in should give you access to all the data from that page, layout of collections too.

Once your layout knows about the mapper functions you specify which mappers should be called when this page is rendered.

```markdown
---
layout: layouts/layout.sizlate.11ty.js
mappers: ["tags"]
tags: ['bacon', 'cheese']
---

<section class="contained">
</section>
```


## Example 4 - Nested Layouts

Sometimes you need to go a step further and nest your layouts. For a blog post for example you might have a post layout that lives inside the main layout. This is where eleventy provides support for [layout chaining](https://www.11ty.dev/docs/layout-chaining/). Which you can also do with `eleventy-sizlate`: 


```js 

const eleventySizlate = require('eleventy-sizlate')

const fs = require('fs')
const template = `
<h2></h2>
<p> Here is something else that you want to appear on the nested page. </p>
<div id="post"></div>
`

class SizlatePost {
    data = {
        layout: 'layouts/layout.sizlate.11ty.js'
    }

    postSelectors(data) {
        return {
            'h2': data.secondaryTitle,
            '#post': data.content,
        }
    }

    render(data) {
        const selectors = this.postSelectors(data)
        return eleventySizlate.render({ template }, selectors)
    }
}

module.exports = SizlatePost;
```

and you can use that template exactly the same as you do the other ones:
```js 
---
title: Nested layout example
secondaryTitle: 'More detail'
layout: layouts/nested.sizlate.11ty.js
---


This content is wrapped in the nested template and the main layout.

```

You can see all these examples in action working on [netlify](https://eleventy-sizlate-example.netlify.app/) and see the code on [github](https://github.com/simonmcmanus/eleventy-sizlate-example)


This site is now running on eleventy with sizlate managing the layouts. I've removed the clientside rendering for now, but thats not to say it can't be put back later.


