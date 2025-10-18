---
layout: layouts/layout.sizlate.11ty.js

permalink: "/posts/{% if pagination.pageNumber>0 %}{{ pagination.pageNumber | plus: 1 }}{% endif %}/"
pagination:
  data: collections.post
  size: 13
  reverse: true
mappers: ["postsPaged"]
"sizlate": {
    "title": "Posts from Simon McManus",
    'meta[name="description"]': {
        content: 'A personal blog by Simon McManus'
    },
     'meta[property="og:description"]': {
        content: 'A personal blog by Simon McManus'
    },
    "a[href='/posts/']": {
        "className": "active"
    }
}

---
<div class="contained">
    <h2>Recent Posts</h2>
    {% include _recentposts.html %}
</div>
<ul class="pagination">
    <li><a class="previous" href="">Previous</a></li>
    <li><a class="next" href="">Next</a></li>
    <li><a href="/tag-list">Browse all tags</a></li>
</ul>
