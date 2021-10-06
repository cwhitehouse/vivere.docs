---
layout: documentation
title: Installation

previous: getting-started/examples
next: documentation/components
---

# Installation
#### Integrate vivere into your application

## npm, yarn
The most straightforward to use Vivere is by using npm or yarn:

```shell
$ npm install vivere
or
$ yarn add vivere
```

## Importing

We need to import Vivere in order to activate it, so that it can parse our document for components.

```js
import { Vivere } from 'vivere';
```

If we're just using anonymous components, this is all we need to do. However, if you want to use custom components, we must register them.

## Components

We can also import the VivereComponent class, which we'll extend to create our own custom components. Once we've created our custom component, we pass it, with the name we'll use to refer to it in our `v-component` directives to `Vivere.register`.

```js
import { Vivere, VivereComponent } from 'vivere';

class MyComponent extends VivereComponent {
  count = 0;

  incrementCount() {
    this.count += 1;
  }
}

Vivere.register(MyComponent, 'MyComponent');
```
