---
pagination:
    data: posts.posts
    size: 1
    alias: post

permalink: "blog/{{ post.path | slug }}/"
layout: post.11ty.js
---

{{post.body}}