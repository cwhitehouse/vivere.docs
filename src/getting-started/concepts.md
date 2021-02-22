---
layout: documentation
title: Concepts
---

# Concepts

#### Explore the core ideas behind Vivere

## Background

Vivere is a component-based framework for adding interactivity to server generated HTML. This framework borrows core ideas from frameworks like Vue and React, but differs in that none of the HTML is rendered client side. Vivere, instead, turns your existing server generated HTML into components that you can then listen to events, conditionally render, and update their attributes based on reactive data.

## Components

Components in Vivere exist as a data layer that manages and coordinates HTML elements with reactive data. A component is defined by assigning it a `v-component` property that matches a component you've registered via Javascript. Once initialized, that component manages reactive data, which can either be passed via HTML rendered via the server, or defined in Javascript on the Component.

The root element of a Component is defined as the HTML element that deines the `v-component` attribute. The Component also includes all children of the root, up until any other `v-component` attribute is detected.

```html
<div>                                 <!-- No component... -->
  <div v-component>                   <!-- Component A (root) -->
    <div>                               <!-- Component A -->
      <div></div>                       <!-- Component A -->
    </div>
    <div v-component="name">            <!-- Component B (root) -->
      <div></div>                         <!-- Component B -->
      <div></div>                         <!-- Component B -->
    </div>
    <div></div>                         <!-- Component A -->
  </div>
  <div></div>                         <!-- No component... -->
</div>
```

## Directives

Directives are the way we tell Vivere to add pieces of interactivity or reactivity to our static HTML. Directives are specially named attributes, that follow the pattern `v-*`. These directives generally either capture an event and hand it off to the Component, render some attribute of the element based on Component data, or accomodate defining data on the Component.

By combining different Directives, we can add advanced functionality that would normally require complicated Javascript to our static HTML, such as filtering and sorting lists, building reactive forms, and creating popups and modals.

## Reactivity

Vivere uses a reactivity system similar to other component based frameworks. When data is set up in one of a few prescribed ways, Vivere will automatically listen for changes to these properties and automatically update the DOM in reaction to those changes.

This makes sure that you can just point your Directives at any value you care about, and Vivere will take care of syncing those attributes with your properties. This also extends to `computed` properties, which allow you to write methods that process and combine any reactive data you are tracking.

In addition to tracking changes to primitives like numbers and strings, Vivere also have special logic to handle array and object reactivity. For arrays, Vivere also listens for `push`, `splice`, and `unshift` operations, and will automatically react to those events. Likewise, Vivere will automatically make new properties on reactive objects reactive, so the entire object tree can be listened to.

#### Component Data

Any data defined in the `data()` function of a Component is automatically set up to be reactive. This allows you to track and use per-Component properties. These can either be passed via the `v-data` directive from your server, or per Component properties (e.g. front-end state).

#### Passed Properties

Properties passed from a Component to one of it's children via the `v-pass` directive, are also reactive for both the parent and child component. Therefore, children can listen to changes in their parent's reactive properties.

#### Computed Properties

Computed properties allow you to define properties that are calculated based on other properties. These special properties react to any property they depend on, and will recompute when any dependant property changes. Once computed, they store their value as if it was a data property on the Component. Other values, like Computed properties or Directives can react to changes in Computed properties, as well as any of the Computed properties dependancies.


## Expressions

Most Vivere directives allow you to pass an `expression` as an argument. How these expressions are parsed varies depending on what the directive is expecting. Generally, these expressions represent a subset of Javascript, parsed directly by Vivere instead of say being passed to an `eval` statement. This allows us Vivere to help the parsing, by properly scoping what `this` is, and prevents us from executing potnetially malicious code.

Expressions are generally interpreted in one of three ways:

#### Data Expression

Data expressions are used alongside directives like `v-data` or `v-store`. They represent data we want to pass to our components. Since the data is coming from outside the system, it will parse the data expression as a primitive, such as a `number`, `string` or `JSON` object.

<%- renderer.markdownSafe(include('/code-pair/code-pair', { name: 'data-expressions' })) %>

#### Method Expression

Method expressions are parsed by `v-event` directives when they are triggered. Method expressions represent a function we want to invoke. They can either refer to a function in our component's `methods`, or a basic assignment expression that is executed in the context of `this` component. Inside basic assignment expressions, we can use some basic operators like not (`!`) or ternary expressions (`? : ;`).

<%- renderer.markdownSafe(include('/code-pair/code-pair', { name: 'method-expressions' })) %>

#### Boolean Expression

Boolean expressions are parsed by directives like `v-if` or `v-disabled` that toggle some property based on a parsed boolean expression. These expressions can either reference a component's `methods`, or evaluate some comparison operator, such as `>` or `<`. They also support ternary expressions, and basic logicical operators (`||` and/pr `&&`).

<%- renderer.markdownSafe(include('/code-pair/code-pair', { name: 'boolean-expressions' })) %>

#### String Expression

String expressions are parsed by directives like `v-text` or `v-style`. They are either evaluated as methods that are expected to return strings, or as strings themselves. Like other expressions, basic operators like ternary operators are available to help accomodate basic logic.

<%- renderer.markdownSafe(include('/code-pair/code-pair', { name: 'string-expressions' })) %>
