---
layout: layouts/layout.sizlate.11ty.js
pagination:
  data: collections.byTag
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - post
    - posts
    - tagList
  addAllPagesToCollections: true
eleventyComputed:
  title: “{{ tag }}”
permalink: /tags/{{ tag  }}/
mappers: ["pagination"]
"sizlate": {
    html: {
        data-speclate-page: 'tag'
    },
}

---
<div class="category"><header class="category">
    <h2 class="title contained"></h2>
</header>
<div class=" contained honey-teir1">
    <p class="summary"></p>
</div>
<div class="category contained"></div></div>


<div class="category-summary contained">
<h4>Posts</h4>
<ul class="posts_holder"><li class="section link">
    <a class="link" target="other_window" href="">
        <h5>
            <img class="favIcon"><span class="title"></span>
        </h5>
    </a>
     <ul class="tags">
        <span>tagged:</span>
        <a class="button tag" href="/tags/eleventy/index.html">eleventy</a>
    </ul>
    <span class="created"></span>
</li></ul>
</div>

<div class="category-summary contained">
<h4>Links</h4>
<ul class="links_holder"><li class="section link">
    <a class="link" target="_blank" href=" ">
        <h5>
            <img class="favIcon"><span class="title"></span>
        </h5>
    </a>
     <ul class="tags">
        <span>tagged:</span>
        <a class="button tag" href="/tags/eleventy/index.html">eleventy</a>
    </ul>
    <span class="created"></span>
</li></ul>
</div>