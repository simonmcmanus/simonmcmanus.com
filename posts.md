---
layout: layouts/layout.sizlate.11ty.js
title: "blog"
permalink: "/posts.html"
mappers: ["listPosts"]
"sizlate": {
    html: {
        data-speclate-page: 'posts'
    },
    "a[href='/posts.html']": {
        "className": "active"
    }
}

---
<div class="contained">
    <nav class="recent-posts">
        <ul class="holder container items">
            <li class="section link">
                <a class="link" target="_blank" href="https://giters.com/11ty/eleventy/issues/1523">
                    <h5>
                        <img class="favIcon"><span class="title">Pug templates need better filter support - Giters</span>
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
