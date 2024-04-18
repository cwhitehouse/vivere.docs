---
layout: documentation
title: Event Directives

previous: documentation/display-directives
next: documentation/list-directives

directives:
  event:
    name: v-event
    key:
      name: name
      types:
        - string
      description: The name of the event we want to capture (e.g. 'click', 'mouseover', 'keydown')
    modifier:
      name: modifier
      types:
        - "'cancel'"
        - "'prevent'"
        - "'delay'"
        - "'outside'"
        - "'esc'"
        - "'escape'"
        - "'ent'"
        - "'enter'"
      description: An optional modifier that changes the behavior of our event listener
    value:
      name: expression
      types:
        - string
      description: An expression to be invoked when the event is triggered
---

# Event Directives

#### Capturing and responding to events

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.event })) %>

The `v-event` directive handles all default event handling for Vivere components. Whichever `event` is passed to the directive, is automatically interepreted as a valid event to be passed to `element.addEventListener`. The `expression` can either be a basic javascription expression, e.g. an assignement to a data attribute, or the name of a method that will be invoked on the component.

We can pass a `modifier` to this directive to change some the behavior of some events:

## All Events

`cancel`

When the `cancel` modifier is applied, the event handler automatically returns false to cancel any default click behavior, such as visiting a link.

`prevent`

When the `prevent` modifier is applied, `preventDefault()` is invoked on the triggered event object.

`delay`

When the `delay` modifier is applied, the event handler is invoked after a `setTimeout(HANDLER, 0)`. This delay allows any other event handlers to resolve before this handler is invoked.

This can be particularly helpful for dealing with `click.outside` events, where we might want to not handle clicks outside a modal until we're sure the modal is visible.

## Click Events

`outside`

When the `outside` modifier is applied, the event listens to clicks anywhere on the document EXCEPT clicks on the element or its descendants. This can be useful for things like automatically dismissing a modal.

## Keyboard Events

You can use modifiers to automatically filter keyboard events to only certain keys, to avoid having to run checks on `keyCode` in your own code.

`esc`, `escape`

Only triggered by the escape key

`ent`, `enter`

Only triggered by the enter (return) key
