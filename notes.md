---
layout: layouts/layout.sizlate.11ty.js
mappers: ["notesPaged"]
permalink: "/notes/{% if pagination.pageNumber>0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
pagination:
  data: collections.notes
  size: 8
"sizlate": {
    "title": "Simon McManus | Notes",
    'meta[name="description"]': {
        content: 'A collection of notes created by Simon McManus'
    },
    'meta[property="og:description"]': {
        content: 'A collection of notes created by Simon McManus'
    },
    "a[href='/links/*']": {
        "className": "active"
    }
}

---

<div class="contained">
    {% include _recentnotes.html %}

<ul>
    <li class="previous"><a href="">Previous</a></li>
    <li class="next"><a href="">Next</a></li>
</ul>
</div>

