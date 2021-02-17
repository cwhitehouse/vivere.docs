---
layout: documentation
title: Display Directives
directives:
  if:
    name: v-if
    value:
      name: expression
      types:
        - string
      description: An expression that evaluates to true to show this element, or false to remove it from the DOM
  show:
    name: v-show
    value:
      name: expression
      types:
        - string
      description: An expression that evaluates to true to show this element, or false to add the `hidden` attribute
  disabled:
    name: v-disabled
    value:
      name: expression
      types:
        - string
      description: An expression that adds the `disabled` attribute to this element when it evaluates true
  href:
    name: v-href
    value:
      name: expression
      types:
        - string
      description: An expression that is interpreted as a string set as the `href` attribute of this element
  class:
    name: v-class
    key:
      name: class
      types:
        - string
      description: The class we want to conditionally add to or remove from this element
    value:
      name: expression
      types:
        - string
      description: An expression that evaluates to true to add the class, or false to remove the class from this element
  style:
    name: v-style
    key:
      name: style
      types:
        - string
      description: The style property we want to control for this element
    value:
      name: expression
      types:
        - string
      description: An expression that is an interpreted as the value for our style property
  text:
    name: v-text
    value:
      name: expression
      types:
        - string
      description: An expression that is interpreted as a string that is used as the text for this element
---

# Display Directives

#### Directives that manage how your HTML is rendered

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.if })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.show })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.disabled })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.href })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.class })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.style })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.text })) %>