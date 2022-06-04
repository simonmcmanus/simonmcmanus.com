---
layout: layouts/layout.sizlate.11ty.js
mappers: ["recentLinks"]
permalink: "/links/{{ pagination.pageNumber }}/"
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
    <nav class="recent-links">
        <ul class="links_holder items">
            <li class="section link">
                <a class="link" target="_blank" href="">
                    <h5>
                        <img class="favIcon"><span class="title"></span>
                    </h5>
                </a>
                <blockquote class="summary"></blockquote>
                <ul class="tags">
                    <span>tagged:</span>    
                <a class="button tag" href="/tags/eleventy/index.html">eleventy</a>
                </ul>
                <span class="created">2021-10-20</span>
            </li>
        </ul>
    </nav>
    <ul>
        <li><a class="previous" href="">Previous</a></li>
        <li><a class="next" href="">Next</a></li>
        <li><a href="/tag-list">Browse all tags</a></li>
    </ul>
    <div id="debug"></div>
</div>

