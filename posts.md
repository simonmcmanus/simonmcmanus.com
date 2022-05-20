---
layout: layouts/layout.sizlate.11ty.js

permalink: "/posts.html"
mappers: ["recentPosts"]
"sizlate": {
    html: {
        data-speclate-page: 'posts'
    },
    "title": "Posts from Simon McManus",
    "a[href='/posts.html']": {
        "className": "active"
    }
}

---
<div class="contained">
    <nav class="recent-posts">
        <ul class="holder container items">
            <li class="section link">
                <a class="link" href="https://giters.com/11ty/eleventy/issues/1523">
                    <h5>
                        <img class="favIcon"><span class="title">Pug templates need better filter support - Giters</span>
                    </h5>
                </a>
                <ul class="tags">
                    <span>tagged:</span>
                    <a class="button tag" href="/tags/eleventy/index.html">eleventy</a>
                </ul>
                <span class="created" >2021-10-20</span>
            </li>
        </ul>
    </nav>
</div>
