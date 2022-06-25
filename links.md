---
layout: layouts/layout.sizlate.11ty.js
mappers: ["linksPaged"]
permalink: "/links/{% if pagination.pageNumber>0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
pagination:
  data: collections.links
  size: 15
"sizlate": {
    "title": "Simon McManus | Links",
    'meta[name="description"]': {
        content: 'A collection of links carefully collected by Simon McManus'
    },
    'meta[property="og:description"]': {
        content: 'A collection of links carefully collected by Simon McManus'
    },
    "a[href='/links/*']": {
        "className": "active"
    }
}

---

<div class="contained">
    {% include _recentlinks.html %}

<ul>
    <li><a class="previous" href="">Previous</a></li>
    <li><a class="next" href="">Next</a></li>
    <li><a href="/tag-list">Browse all tags</a></li>
</ul>
<div id="debug"></div>
</div>

