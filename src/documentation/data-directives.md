---
layout: documentation
title: Data Directives

previous: documentation/components
next: documentation/display-directives

directives:
  component:
    name: v-component
    value:
      name: name
      types:
        - string
        - 'null'
      description: The name of a component that has been previously registered, or blank for an anonymous component
  data:
    name: v-data
    key:
      name: name
      types:
        - string
      description: The name of the data attribute we're initializing
    value:
      name: value
      types:
        - string
        - number
        - json
        - 'null'
      description: The initial value of the data attribute
  store:
    name: v-store
    key:
      name: name
      types:
        - string
      description: The name of the data attribute we're initializing and storing
    modifier:
      name: type
      types:
        - "'local'"
        - "'session'"
      default: "'local'"
      description: Controls whether `localStorage` or `sessionStorage` is used to store this attribute
    value:
      name: value
      types:
        - string
        - number
        - json
        - 'null'
      description: The default value to initialize this attribute with if we don't have a stored value
  pass:
    name: v-pass
    key:
      name: name
      types:
        - string
      description: The name of the passed data attribute on this (the child) component
    value:
      name: attribute
      types:
        - string
      description: The name of attribute we're passing on the parent
  bind:
    name: v-bind
    key:
      name: event
      types:
        - string
      description: The name of the event we will eventually $emit
    value:
      name: method
      types:
        - string
      description: A method on the parent component to be invoked when $emit is called with this directive's event
  sync:
    name: v-sync
    value:
      name: attribute
      types:
        - string
      description: The name of the data attribute we're syncing
  ref:
    name: v-ref
    value:
      name: name
      types:
        - string
      description: The name of the reference we're creating
---

# Data Directives

#### Directives that manage the access and flow of data

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.component })) %>

The `v-component` directive causes Vivere to take action. The first time Vivere sees the `v-component` it begins setting up components under the hood, and uses those components as the scope for any data or events that it is tracking. Components come in two flavors:

#### Anonymous Components

If no value is passed to the `v-component` directive, then we set up an anonymous component. These components have all the functionality of Vivere, but do not rely on any external Javascript. This means they are limited to only what can be accomplished by directives. These can still be quite powerful and allow for relatively advanced behavior.

#### Named Components

By passing a name to the `v-component` directive, Vivere will try and find a component definition that has been previously registered with Vivere by the `Vivere.register` method. These files allow more customizability in setting up components than possible just through directives, and allow us to run any arbitrary code. All of that behavior and data, however, is still scoped to the `v-component` making our lives easier and preventing code leakage.

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.data })) %>

The `v-data` directive is how we initialize which data attributes we should be tracking with our component. As a reminder, anything passed to `v-data` is automatically reactive. Anonymous components will need to have all of their data passed into the component via `v-data`, while named components can rely on the `data()` property in their component definition.

If we want to pass data from the server though, we'll need to pass it via `v-data`, even in named components, since it will be dynamic per instance.

```html
<!-- This anonymous component has two reactive data attributes -->
<!--  · `record` which is JSON passed from the server -->
<!--  · `finished` which is a state variable tracked client side -->
<div
  v-component
  v-data:record="{ 'id': 0, 'title': 'The Joy of Cooking' }"
  v-data:finished="false"
>
  <!-- This `p` will automatically display the title and update if it changes -->
  <p v-text="record.title"></p>
</div>
```

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.store })) %>

The `v-store` directive functions similarly to `v-data`, allowing us to set up reactive data on a component, but it also automatically stores that data in either `localStorage` or `sessionStorage` so it persists beyond the current page. The first time we encounter a `v-store` directive, it initialized with it's default value. Any subsequent visits will attempt to pull the data from `localStorage` or `sessionStorage` (based on which type we chose). Whenever the data is updated, it automatically saves it for us, so we don't need to worry about managing the store ourselves.

We can control which type of store is used by adding a modifier to the directive. `v-store:NAME.local` uses local storage, and `v-store:NAME.session` uses session storage. `v-store` defaults to session storage to avoid long lived data.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-store' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.pass })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.bind })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.sync })) %>

The `v-sync` directive is used to automatically keep our data in sync with an element that allows user input. For example, we can keep track of the text entered into an `input`, the current state of a `select`, or what's been typed into a `textarea`. Likewise, if we manually update the data from our code, the `input`, `select`, or `textarea` will automatically be updated in response.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-sync' })) %>

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.ref })) %>

The `v-ref` directive is used to expose access to HTML elements to our components. It takes a string arg, that is used as a name for that element so it can easily be referenced from the component's Javascript without having to search the DOM.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-ref' })) %>
