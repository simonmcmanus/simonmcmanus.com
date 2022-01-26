---
layout: layouts/layout.sizlate.11ty.js
mappers: ["listLinks"]
permalink: "/links.html"
"sizlate": {
    html: {
        data-speclate-page: 'links'
    },
    "a[href='/links/']": {
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
                <ul class="tags">
                    <span>tagged:</span>    
                <a class="button tag" href="/tags/eleventy/index.html">eleventy</a>
                </ul>
                <a class="created" href="/2021-10-20/index.html">2021-10-20</a>
            </li>
        </ul>
    </nav>
</div>