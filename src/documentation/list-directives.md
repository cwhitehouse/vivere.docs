---
layout: documentation
title: List Directives
directives:
  filter:
    name: v-filter
    value:
      name: expression
      types:
        - string
      description: An expression that is passed to this list's child components, which will cause them to appear if it evaluates true, or removes them from the DOM if it evaluates false
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

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.filter })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.sort })) %>