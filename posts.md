---
layout: layouts/layout.sizlate.11ty.js

permalink: "/posts/"
mappers: ["recentPosts"]
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
