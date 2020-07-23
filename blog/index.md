---
data: posts.posts
layout: post.11ty.js
title: All posts
---

{% for post in posts.posts %}
- {{post.title}} | [Read more &rarr;](/blog/{{post.path}})
{% endfor %}