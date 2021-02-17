---
layout: documentation
title: Components
---

# Components

#### Detailed information about options for a component definition

## Data

The `data` method of a component allows you to set up some initial reactive data. This is the best time to define any non-derivate attributes you'll need up front. The `data` method is expected to return an object, and uses a function so that your component definition can be re-used for many component instances.

```js
// Example component, using data() to define properties
export default {
  data() {
    return {
      key: 'value',
      active: true.
      item: { name: 'test' },
    };
  },
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
      defaultValue: 0
    },
    user: {
      type: 'session',
      defaultValue: () => { return { id: 0, name: 'Test' } },
      version: 1,
    },
  },
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
  }
};
```

## Computed

Computed properties allow us to have data derived from other data properties. We define a method that computes the property, and it will automatically be executed if the property is accessed, and any of the properties it depends upon have changes since the last time it was accessed.

Computed properties keep track of every `data` and `computed` property they depend on to kepe their value updated, but cached to avoid unecessary computation. We access `computed` just as we would any other proprty, not as if they're methods;

```js
// A component with a few computed properties
export default {
  // We need some data to base our computed properties on
  data() {
    return {
      tags: [].
    };
  },

  computed: {
    // Automatically update when tags updates
    tagslength() {
      const { tags } = this;
      if (tags == null) return 0;
      return tags.length;
    },

    // Automatically updates when tagsLength updates
    hasTags() {
      const { tagsLength } = this;
      return tagsLength > 0;
    },
  },
};
```

## Methods

We use the methods attribute to track any functions we'll want to invoke from events or computed properties. Tracking out functions here makes sure they're available from directives, and that `this` is also the component instance as we'd expect.

```js
// A component with some helper methods
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    logCount() {
      console.log(`The current count is: ${this.count}`);
    },

    incrementCount() {
      this.count += 1;
    },
  },
};
```

## Callbacks

The `callbacks` property on a component gives us the opportunity to define methods that will be invoked during certain lifecycle events. This is useful if we have to do any special set up or take down of our component.

```js
  export default {
    callbacks: {
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

      // Dehydration happens before a Turbolinks page change, so we cache
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
    }
  }.
```
