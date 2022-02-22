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
  title: Tagged “{{ tag }}”
permalink: /tags/{{ tag  }}/
mappers: ["pagination"]
---
<h1 class="title"></h1>


<div class="category-summary contained">
<h4>Posts</h4>
<ul class="posts_holder"><li class="section link">
    <a class="link" target="other_window" href="">
        <h5>
            <img class="favIcon"><span class="title"></span>
        </h5>
    </a>
    <span class="created"></span>
</li></ul>
</div>

<div class="category-summary contained">
<h4>Links</h4>
<ul class="links_holder">

<li class="section link">
    <a class="link" target="_blank" href=" ">
        <h5>
            <img class="favIcon"><span class="title"></span>
        </h5>
    </a>
    <span class="created"></span>
</li>


</ul>
</div>