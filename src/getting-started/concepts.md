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
