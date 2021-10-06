---
layout: documentation
title: List Directives

previous: documentation/event-directives

directives:
  sort:
    name: v-sort
    value:
      name: expression
      types:
        - string
      description: An expression that returns an array of sorting params, where any values are read from this list's child components
---

# List Directives

#### Special directives for managing common list behavior

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.sort })) %>
