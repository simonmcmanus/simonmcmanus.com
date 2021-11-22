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
list of tags  fff


<nav class="posts"><a href=""></a></nav>
