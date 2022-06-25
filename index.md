---
layout: layouts/layout.sizlate.11ty.js
mappers: [ "linksTop3", "postsTop3"]
showRecent: 3
sizlate: { 'a[href="/"]': {
    className: 'active'
}}

---


<section class="contained">

Welcome to the home of Simon McManus 

This site is my personal playground where you will find experiments, <a href="/posts/">blog posts</a>, <a href="/talks.html">talks</a> and recently saved <a href="/links.html">links.</a> 

<!-- <p class="notice">I'm currently making changes to the design of this site and pushing changes regularly so please ignore anything that does not look right.</p> -->

</section>

<div class="contained">
    <div class="recent-heading">
        <h2>Recent Posts</h2>
        <a href="/posts/" class="view-all">all posts</a>
    </div>
    {% include _recentposts.html %}
</div>
<div class="contained">
    <div class="recent-heading">
        <h2>Recent Links</h2>
        <a href="/links/" class="view-all">all links</a>
    </div>
     {% include _recentlinks.html %}
</div>


<ul class="panels  contained">
<li class="web"><a href="/tags/web/index.html">Web developer</a></li>
<li class="lead"><a href="/tags/lead/">Engineering Lead</a></li>
<li class="organiser"><a href="/tags/enhance-conf">Event Organiser</a></li>
<li class="resident"><a href="/tags/loughton/">Loughton resident </a> </li>
<li class='garden'><a href="/tags/garden/">Gardener</a></li>
    <!-- <li class='dog'><a href="/tags/guide-dogs-for-the-blind/index.html">Guide Dog Volenteer</a></li> -->
    <!-- <li class="host"><a href="/tags/js/index.html">Podcast Host</a></li> -->
    <!-- <li class="speaker"><a href="/talk.html">Speaker</a></li> -->


</ul>

