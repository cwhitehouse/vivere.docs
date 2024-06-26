---
layout: documentation
title: Introduction

next: getting-started/concepts
---

# Introduction

#### Learn the basics of Vivere

## The Basics

Vivere is a javascript frameworks built to help you enhance your server generated, or static websites with basic interactivity. It shares a similar purpose to frameworks like Stimulus, but borrows the concepts of components and reactivity from frameworks like Vue and React.

## Our First App

To get started with Vivere, we add it to our project as we would any other node module:

```bash
yarn install vivere
```

```js
import { Vivere } from 'vivere';
```

Once it's been added to our project, it will automatically listen for the DOM to load and parse the document for relevant attributes to add functionality.

#### Components

Once Vivere is installed, we need to designate an element as the root of a Vivere component. A component is an object that manages and scopes reactive data.

```html
<html>
  <body>
    <div v-component>
    </div>
  </body>
</html>
```

That attribute that starts with `v-` is called a `directive`. Directives tell Vivere to take a specific action when the element is being parsed. This particular directive, `v-component` tells Vivere to create a new component, attached to that `div` element.

#### Data

Let's say we want our website to have an interactive counter for our guests to play with. To do that, we're going to want to track a data property on our component called `count`. We can use another directive to tell our Vivere component that we want to track a property, and initialize it to 0.

```html
<html>
  <body>
    <div
      v-component
      v-data:count="0"
    ></div>
  </body>
</html>
```

Under the hood, Vivere is adding a data property to our component instance, initializing the value, and automatically making it reactive.

#### Interactivity

Now that we have our data component, we'll want to allow our users to update the count. We're going to add a button that will increment our count. Time for another, new, directive!

```html
<html>
  <body>
    <div
      v-component
      v-data:count="0"
    >
      <button v-event:click="count -= 1"> - </button>
      <button v-event:click="count += 1"> + </button>
    </div>
  </body>
</html>
```

Our new `v-event` directive will create an event listener for the `click` event. When the click event happens it executes the javascript code `count += 1`, and automatically scopes it to our component.

#### Display

Our next step is to make sure our users know what the current count is. To do that we'll want to ask Vivere to automatically display the current count. We can do that with the `v-text` directive, which updates an elements `innerText` with data from our component.

If we put all of this together we can create something like this:

<%- renderer.markdownSafe(include('/examples/example', { name: 'counter' })) %>

It's important to note that we don't have to manually update the `innerText` of our component when `count` changes. Since our `count` property is reactive, the `v-text` directive auomatically detects changes to `count` and updates the `innerText` or us.

#### Wrapping Up

We've just built a super basic, interactive application without using much javascript at all. Vivere is designed to let you do lots with just directives. But it doesn't end there.

## Getting Fancy

While directives allow us to quickly use some prescribed functionality, Vivere allows us to use any and all javascript we might want to use. To expand what's possible, let's move our component definition out of directives embedded in the HTML, to javascript.

By passing an argument to the `v-component` directive, we can tell Vivere to lookup a component definition that we registered before setup.

<%- renderer.markdownSafe(include('/examples/example', { name: 'partial-counter' })) %>

Any properties defined in our class are part of our component as reactive data, just like when using the `v-data` directive above. Any methods we add to the new component class are available to our `v-event` directives (automatically inferring `this`).

#### Computational Magic

Within a component definition, we can also write `computed` properties just as we would in a normal javascript class. Vivere makes sure that this property is reactive to any properties it references.

```js
class Counter extends VivereComponent {
  count = 0;

  get canDecrement() {
    return this.count > 0;
  }
};
```

We access `canDecrement` just like we do `count` or any other data property, but it will automatically know it should recompute when `count` changes.

#### Check This Out

Using these new `computed` properties, and more advanced logic in our `methods`, as well as a few new directives we can make our counter have some advanced behaviors.

<%- renderer.markdownSafe(include('/examples/example', { name: 'fancy-counter' })) %>

These new directives, `v-class`, `v-disabled`, and `v-if` let us do more to control how our elements our rendering by controlling classes, element attributes, and whether or not an element is rendered at all.

## Breaking It Down

Now that we've built a few examples, we can take a closer look at all the parts of a Vivere application.

