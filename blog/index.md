---
data: posts.posts
layout: post.11ty.js
title: All posts
headline: This is a blog where I post about new stuff I learn every day!
---

{% for post in posts.posts %}
- {{post.title}} | [Read more &rarr;](/blog/{{post.path}})
{% endfor %}