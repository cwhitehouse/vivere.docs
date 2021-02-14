---
layout: documentation
title: Examples
---

# Examples

#### Walkthrough examples of how to use Vivere

## Counter

A simple counter, using an anonymous Vivere component. We define a data property called `count`, tell our `<p>` to display the (reactive) value of the `count`, and hook up listeners on the buttons that mutate the component.

<%- include('/examples/example', { name: 'counter' }) %>

## Fancy Counter

Now, let's upgrade our counter and show what's possible when we name our component, and define it in Javascript. Here we're going to use a `computed` property to render a string with our count, add more logic to our buttons, and use methods instead of expressions to update our count.

<%- include('/examples/example', { name: 'fancy-counter' }) %>

## Filterable List

We can use a `v-if` directive to conditionally render elements in a list. Instead of something like Vue's `v-for` to create lists, we'll rely on rendering the whole list from the server, and use individual directives to control which elements appear. We can also use a `v-data` directive pass JSON data from the server to the individual list items, and filter them based on that data.

This is a great opportunity to use something like `partials` from `Rails` to make our components as re-usable as possible.

<%- include('/examples/example', { name: 'filterable-list' }) %>

