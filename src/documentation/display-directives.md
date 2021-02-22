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

The `v-if` directive is used to control whether an element is rendered in the DOM. If the expression evaluates to true, we attach the element to the DOM, otherwise we remove it, but save it's location with an HTML comment.

For convenience, `v-if` automatically removes the `hidden` attribute from the element when the directive is parsed. This allows you to hide conditionally rendered elements until Vivere has finished parsing.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-if' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.show })) %>

The `v-show` directive works very similarly to `v-if`, but toggles the `hidden` attribute of the element instead of removing the element from DOM. You can choose which directive to use based on whether you require the element to remain within the DOM or not.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-show' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.disabled })) %>

The `v-disabled` directive conditionally adds the `disabled` attribute to an element. The `disabled` attribute is added if the expression evaluates to true, and removes it if it evaluates to false.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-disabled' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.href })) %>

The `v-href` directive controls the `href` attribute on an element. If the expression returns null, the `href` attribute is removed, otherwise it is interpreted as a string used as the `href` attribute.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-href' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.class })) %>

The `v-class` directive adds or removes a `class` to the element. If the expression is evaluated as true, we add the class, and if it evaluates as false we remove the class. You can use multiple `v-class` directives to toggle multiple classes.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-class' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.style })) %>

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-style' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.text })) %>
