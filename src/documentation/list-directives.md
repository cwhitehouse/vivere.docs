---
layout: documentation
title: List Directives

previous: documentation/event-directives

directives:
  sort:
    name: v-for
    value:
      name: expression
      types:
        - '"item of list"'
        - '"(index, item) of list"'
        - '"(key, value) of object"'
      description: An expression that creates a component for each item in a list and renders them all
---

# List Directives

#### Special directive for rendering a list of objects

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.sort })) %>

The `v-for` directive is used to render a list of objects. It effectively copies the element that hosts the directive, creates a component for each copy, passes an individual list item (and `key` or `index`) to that component, and tells them each to render. A `v-component` directive can be used to specifcy a named `component` that you would like to use for each list item.

The `v-for` directive also tries to improve performance by caching elements/components as they are removed and reinserted into the list, and prevents rendering of these cached components so you don't need to worry about any `null` or index out of bound issues while rendering.
