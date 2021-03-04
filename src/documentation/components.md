---
layout: documentation
title: Components

previous: documentation/installation
next: documentation/data-directives
---

# Components

#### Detailed information about options for a component definition

## Data Attributes

We can expose any data attributes to our component as we would in any standard Javascript class or object. Any non-method, non-computed properties we pass to Vivere are automatically added to our component as reactive attributes.

```js
export default {
  key: 'value',
  active: true,
  item: { name: 'test' },
  text: null,
};
```
```js
export default class {
  key = 'value';
  active = true;
  item = { name: 'test' };
  text = null;
};
```

## Stored

The `stored` attribute in a component allows us to establish reactive data that is automatically stored and retrieved from either `localStorage` or `sessionStorage`. We can define the name of the attribute, which type of storage it should use, and a default value to use if there is no value currently in storage.

The values are automatically saved to storage whenever their values change. An optional `version` number (default 0) can be included as a way to reset the store in case the data expectations change. Vivere will only retrieve values that were stored using the most recent `version` to the `stored` attribute.

```js
// Example component, using store to define properties
export default {
  stored: {
    count: {
      type: 'local',
      default: 0
    },
    user: {
      type: 'session',
      default: { id: 0, name: 'Test' },
      version: 1,
    },
  },
};
```
```js
export default class {
  count = 0;

  stored = {
    count: { type: 'local' },
    user: {
      type: 'session',
      default: { id: 0, name: 'Test' },
      version: 1,
    },
  };
};
```

## Passed

The `passed` attribute on a component allows us to set up rules and expectations for data we expect to receive from a parent component. We can either set up requirements about what `passed` attributes need to exist or set up a default value to fallback to if that attribute is not present.

```js
// An example component expecting a few passed properties
export default {
  passed: {
    // Will throw an error if there's no `v-passed` directive
    active: { required: true },
    // Will default to 0 if there's no `v-passed` directive
    count: { default: 0 },
  },
};
```
```js
export default class {
  count = 0;

  passed: {
    active: { required: true },
    count: {},
  },
};
```

## Computed

Computed properties allow us to have data derived from other data properties. We define a method that computes the property, and it will automatically be executed if the property is accessed, and any of the properties it depends upon have changes since the last time it was accessed.

Computed properties keep track of every data attribute and any other computed properties they depend on to kepe their value updated, but cached to avoid unecessary computation. We access `computed` properties as we would any other data attribute on the component.

```js
// A component with a few computed properties
export default {
  // We need some data to base our computed properties on
  tags: [],

  get tagslength() {
    const { tags } = this;
    if (tags == null) return 0;
    return tags.length;
  },

  get hasTags() {
    const { tagsLength } = this;
    return tagsLength > 0;
  },
};
```
```js
export default class {
  tags = [];

  get tagslength() {
    const { tags } = this;
    if (tags == null) return 0;
    return tags.length;
  }

  get hasTags() {
    const { tagsLength } = this;
    return tagsLength > 0;
  }
}
```

## Watchers

Watchers allow us to react to any data changes on our component by providing a method to run when any data attribute or computed property changes. Each data property has an associated watcher method, with the name `on<PROPERTY>Changed`. By implementing that method, we can react to changes.

Watchers are invoked after computed properties are resolved, so we can expect all the data attributes and computed properties to have been updated before the watcher is called. However, they are called before any DOM changes, so if we want to reference any elements (say an input behind a `v-if` directive), we should use `$nextRender` to wait for rendering to finish.

They can be particularly helpful for listening to `passed` properties, so we know when a parent updates it's data.

```js
export default {
  count: 0,

  onCountChanged(newValue, oldValue) {
    console.log(`Count changed from ${oldValue} to ${newValue}! It's now ${this.count}!`);
  },
}
```
```js
export default class {
  editing = false;

  onEditingChanged() {
    if (this.editing)
      this.$nextRender(() => this.$refs.editingInput.focus());
  }
}
```

## Methods

Any methods or functions provided in our component definition our available both from within our computed (in computed properties, other methods, etc.) and available to be passed to `v-event` directives to be triggered when an event such as a `click` or `mouseover` is triggered.

```js
// A component with some helper methods
export default {
  count: 0,

  logCount() {
    console.log(`The current count is: ${this.count}`);
  },

  incrementCount() {
    this.count += 1;
  },
};
```
```js
export default class {
  padding = 0;

  get paddingStyle() {
    return this.toStyleProperty(this.padding);
  }

  toStyleProperty(number) {
    return `${number}px`;
  }
};
```

## Callbacks

There are a handful of reserved method names that are automatically invoked during the life cycle of a component. By implementing one of these methods, we can automatically react to certain events. This allows us to do things like instantiating any initial data, or adding and remove custom event handlers.

```js
  export default {
    // Connection is the first step in the lifecycle
    // when a component is instantiated
    beforeConnected() {
      // Invoked once the component is instantiated,
      // before the first render has completed
    },
    connected() {
      // Invoked after the component is instantiated,
      // once the first render has completed
    },

    // Dehydration happens before a Turbo page change, so we cache
    // a version  of the page will all of our directives in place
    beforeDehydrated() {
      // Invoked once dehydration starts,
      // before the component is dehydrated
    },
    dehydrated() {
      // Invoked after dehydration starts,
      // once the component is dehydrated
    },

    // Destruction happens when a component is removed from DOM
    beforeDestroyed() {
      // Invoked once destruction starts,
      // before the component is removed from the DOM
    },
    destroyed() {
      // Invoked after descruction starts,
      // once the component is removed from the DOM
    },
  };
```
