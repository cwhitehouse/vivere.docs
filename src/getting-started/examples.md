---
layout: documentation
title: Examples

previous: getting-started/concepts
next: documentation/components
---

# Examples

#### Walkthrough examples of how to use Vivere

## Counter

A simple counter, using an anonymous Vivere component. We define a data property called `count`, tell our `<p>` to display the (reactive) value of the `count`, and hook up listeners on the buttons that mutate the component.

<%- renderer.markdownSafe(include('/examples/example', { name: 'counter' })) %>

## Fancy Counter

Now, let's upgrade our counter and show what's possible when we name our component, and define it in Javascript. Here we're going to use a `computed` property to render a string with our count, add more logic to our buttons, and use methods instead of expressions to update our count.

<%- renderer.markdownSafe(include('/examples/example', { name: 'fancy-counter' })) %>

## Filterable List

We can use a `v-if` directive to conditionally render elements in a list. Instead of something like Vue's `v-for` to create lists, we'll rely on rendering the whole list from the server, and use individual directives to control which elements appear. We can also use a `v-data` directive pass JSON data from the server to the individual list items, and filter them based on that data.

This is a great opportunity to use something like `partials` from `Rails` to make our components as re-usable as possible.

<%- renderer.markdownSafe(include('/examples/example', { name: 'filterable-list' })) %>

## To Do List

Putting together all of our component magic let's us set up very interactive and involved interface. Here we have a list of to-do's generated from a server, with the ability to check them off, delete them, edit them, or create a new one.

<%- renderer.markdownSafe(include('/examples/example', { name: 'to-do-list' })) %>
