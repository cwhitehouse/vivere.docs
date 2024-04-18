---
layout: documentation
title: Data Directives

previous: documentation/components
next: documentation/display-directives

directives:
  component:
    name: v-component
    key:
      name: defer
      types:
        - string
      description: An optional property that tells the component to defer rendering/processing until an event has been triggered
    modifier:
      name: event
      types:
        - "string"
      description: The name of the event we want to trigger the processing of a deferred component
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
  compute:
    name: v-compute
    key:
      name: name
      types:
        - string
      description: The name of the computed property we're setting up
    value:
      name: expression
      types:
        - string
      description: An expression that will compute the value of this property
  method:
    name: v-method
    key:
      name: name
      types:
        - string
      description: The name of the method we're setting up
    value:
      name: expression
      types:
        - string
      description: An expression that will be invoked when this method is called
---

# Data Directives

#### Directives that manage the access and flow of data

Data directives can only generally exist on a component root (i.e. alongisde a `v-component` directive). The only exception is the `v-sync` directive which is both responsible for managing data AND displaying that data.

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.component })) %>

The `v-component` directive causes Vivere to take action. The first time Vivere sees the `v-component` it begins setting up components under the hood, and uses those components as the scope for any data or events that it is tracking. Components come in two flavors:

#### Anonymous Components

If no value is passed to the `v-component` directive, then we set up an anonymous component. These components have all the functionality of Vivere, but do not rely on any external Javascript. This means they are limited to only what can be accomplished by directives. These can still be quite powerful and allow for relatively advanced behavior.

#### Named Components

By passing a name to the `v-component` directive, Vivere will try and find a component definition that has been previously registered with Vivere by the `Vivere.register` method. These files allow more customizability in setting up components than possible just through directives, and allow us to run any arbitrary code. All of that behavior and data, however, is still scoped to the `v-component` making our lives easier and preventing code leakage.

#### Deferred Components

By adding `:defer.{event}` to a component, we can have its setup (directive processing, data reactivity setup, etc.) deferred until some event takes place. This can be helpful for performance intensive situations with lots of components that don't display anything until an event happens (e.g. a series of objects with corresponding modals that don't appear until a button is pressed).

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.data })) %>

The `v-data` directive is how we initialize which data attributes we should be tracking with our component. As a reminder, anything passed to `v-data` is automatically reactive. Anonymous components will need to have all of their data passed into the component via `v-data`, while named components can rely on defining properties in their component definition.

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

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.store })) %>

The `v-store` directive functions similarly to `v-data`, allowing us to set up reactive data on a component, but it also automatically stores that data in either `localStorage` or `sessionStorage` so it persists beyond the current page. The first time we encounter a `v-store` directive, it initialized with it's default value. Any subsequent visits will attempt to pull the data from `localStorage` or `sessionStorage` (based on which type we chose). Whenever the data is updated, it automatically saves it for us, so we don't need to worry about managing the store ourselves.

We can control which type of store is used by adding a modifier to the directive. `v-store:NAME.local` uses local storage, and `v-store:NAME.session` uses session storage. `v-store` defaults to session storage to avoid long lived data.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-store' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.pass })) %>

The `v-pass` directive is used to hand reactive data down from a parent to a child component. If the child component changes that data, it will automatically be refleceted on the parent and vis versa. Data passed via `v-pass` will override any properties defined on a named component, so those properties can be used as default values in case there are times when `v-pass` is not used to pass that particular piece of data.

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.bind })) %>

The `v-bind` directive is used to expose a parent's methods to a child component. Once the method is bound, the child component can `$emit(EVENT, ...args)` to call the method on the parent with any passed args. `v-bind` allows us to `$emit` an `event` that will trigger different methods on different parent components, allowing the child component to stay more abstract and less dependant on the parent's implementation.

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.sync })) %>

The `v-sync` directive is used to automatically keep our data in sync with an element that allows user input. For example, we can keep track of the text entered into an `input`, the current state of a `select`, or what's been typed into a `textarea`. Likewise, if we manually update the data from our code, the `input`, `select`, or `textarea` will automatically be updated in response.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-sync' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.ref })) %>

The `v-ref` directive is used to expose access to HTML elements to our components. It takes a string arg, that is used as a name for that element so it can easily be referenced from the component's Javascript without having to search the DOM.

<%- renderer.markdownSafe(include('/examples/example', { name: 'v-ref' })) %>

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.compute })) %>

The `v-compute` directive allows us to create a `computed` property via a directive, instead of relying on a named component. It will behave the same as defining `get NAME() { EXPRESSION }` on our component, but saves us from creating a new javascript file if we just need a `computed` property.

---

<%- renderer.markdownSafe(include('/documentation/directives/definition', { directive: directives.method })) %>

The `v-method` directives allows us to create a `method` on our component via directive, instead of relying on a named component. It will behave the same as defining `NAME() { EXPRESSION }` on our component, but saves us from creating a new javascript file if we just need a reusable method.
