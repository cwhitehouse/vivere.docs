---
layout: documentation
title: Display Directives

previous: documentation/data-directives
next: documentation/event-directives

directives:
  if:
    name: v-if
    modifier:
      name: modifier
      types:
        - '"anim-x"'
        - '"anim-y"'
      description: An optional modifier that causes the element to animate in and out when its state changes
    value:
      name: expression
      types:
        - string
      description: An expression that evaluates to true to show this element, or false to remove it from the DOM
  else-if:
    name: v-else-if
    modifier:
      name: modifier
      types:
        - '"anim-x"'
        - '"anim-y"'
      description: An optional modifier that causes the element to animate in and out when its state changes
    value:
      name: expression
      types:
        - string
      description: An expression that evaluates to true to show this element, or false to remove it from the DOM
  else:
    name: v-else
    modifier:
      name: modifier
      types:
        - '"anim-x"'
        - '"anim-y"'
      description: An optional modifier that causes the element to animate in and out when its state changes
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
        - 'null'
      description: The class we want to conditionally add to or remove from this element
    modifier:
      name: classes
      types:
        - string
        - 'null'
      description: Additional classes (separated by a ".") to conditionally add or remove
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
  html:
    name: v-html
    value:
      name: expression
      types:
        - string
      description: An expression that is interpreted as an HTML string that is attached to this element
  src:
    name: v-src
    value:
      name: expression
      types:
        - string
        - 'null'
      description: An expression that is interpreted as a src for an img element
  attr:
    name: v-attr
    key:
      name: attribute
      types:
        - string
      description: The attribute we want to control for this elment
    value:
      name: expression
      types:
        - string
        - 'null'
      description: An expression that is interpreted as a value for our attribute
---

# Display Directives

#### Directives that manage how your HTML is rendered

Display directives can generally be attached to any element, and can acess data from the component they are related to. Some directives (e.g. `v-disabled`, `v-href`) may only be valid on certain types of elements.

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.if })) %>

The `v-if` directive is used to control whether an element is rendered in the DOM. If the expression evaluates to true, we attach the element to the DOM, otherwise we remove it, but save it's location with an HTML comment.

For convenience, `v-if` automatically removes the `hidden` attribute from the element when the directive is parsed. This allows you to hide conditionally rendered elements until Vivere has finished parsing.

The `v-if` directive also prevents any directives attached to its ancestors from rendering. This is helpful for example if you only want to render content if an `object` exists, and want to freely reference properties of that object (e.g. in a `v-text` directive) without having to worry about `null` checks.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-if' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives['else-if'] })) %>

The `v-else-if` directive works just like the `v-if` directive, but evaluates only if an immediately preceding `v-if` or `v-else-if` directive evalutes false first, and its expression evalutes to be `true`.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-if' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives['else-if'] })) %>

The `v-else` directive renders content like a `v-if`, but ONLY if an immediately preceding `v-if` or `v-else-f` directive evaluates false first.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-if' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.show })) %>

The `v-show` directive works very similarly to `v-if`, but toggles the `hidden` attribute of the element instead of removing the element from DOM. You can choose which directive to use based on whether you require the element to remain within the DOM or not.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-show' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.disabled })) %>

The `v-disabled` directive conditionally adds the `disabled` attribute to an element. The `disabled` attribute is added if the expression evaluates to true, and removes it if it evaluates to false.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-disabled' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.href })) %>

The `v-href` directive controls the `href` attribute on an element. If the expression returns null, the `href` attribute is removed, otherwise it is interpreted as a string used as the `href` attribute.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-href' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.class })) %>

The `v-class` directive adds or removes one or more classes to the element. It can operate in two ways, either by passing a class (or classes) to the directive to add or remove based on a boolean expression, or by passing an expression that will evaluate as a list of classes.

### Boolean Expression

When we included a class (or classes) in our directive, the expression will be interepreted as a boolean expression. If the expression is evaluated as true, we add the class(es), and if it evaluates as false we remove the class(es). You can use multiple `v-class` directives to toggle multiple classes with differing logic.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-class' })) %>

### Class List Expression

For more complicated logic, or personal preference, we can also point the `v-class` directive to an array of classes we want to turn on. Any classes previously added by this `v-class` directive will be removed and any new classes passed are added.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-class-alt' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.style })) %>

The `v-style` directive automatically updates a style attribute for the element involved. The `name` property controls which attribute we update. The expression is evaluated as a string and passed in as a value for the style.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-style' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.text })) %>

The `v-text` directive sets the text property of your element. It's useful for any dynamic text derived from component data that we cannot rely on the server to generate.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-text' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.html })) %>

The `v-html` directive sets the `innerHTML` property of your element. It does not do any escpaing or safety checks, so be careful!

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.attr })) %>

The `v-attr` directive sets the value of any generic attribute of an element. If you pass in `null`, the attribute will be removed; otherwise it will be set to whatever the `expression` evaluates to.

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.src })) %>

The `v-src` directive sets the `src` property of an `img`. If you pass in `null` it will set the `src` to a blank string, otherwise it will be set to whatever the `expression` evaluates to.
