---
layout: layouts/layout.sizlate.11ty.js
pagination:
  data: collections
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


<ul class="post-list">
  <li><a href=""></a></li>
</ul>
