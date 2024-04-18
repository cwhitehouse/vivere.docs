---
layout: documentation
title: Components

previous: documentation/installation
next: documentation/data-directives

methods:
  '$log':
    name: '$log'
    args:
      - name: message
        type: string
  '$emit':
    name: '$emit'
    args:
      - name: event
        type: string
      - name: '...args'
  '$attach':
    name: '$attach'
    args:
      - name: html
        type: string
      - name: ref
        type: string
  '$nextRender':
    name: '$nextRender'
    args:
      - name: callback
        type: function
  '$forceRender':
    name: '$forceRender'
  '$destroy':
    name: '$destroy'
---

# Components

#### Detailed information about options for a component definition

## Data Attributes

We can expose any data attributes to our component as we would in any standard Javascript class or object. Any non-method, non-computed properties we pass to Vivere are automatically added to our component as reactive attributes.

```js
export default class extends VivereComponent {
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
export default class {
  count = 0;

  $stored = {
    count: { type: 'local' },
    user: {
      type: 'session',
      default: { id: 0, name: 'Test' },
      version: 1,
    },
  };
};
```

## Computed

Computed properties allow us to have data derived from other data properties. We define a method that computes the property, and it will automatically be executed if the property is accessed, and any of the properties it depends upon have changes since the last time it was accessed.

Computed properties keep track of every data attribute and any other computed properties they depend on to keep their value updated, but the value is cached to avoid unecessary computation. We access `computed` properties as we would any other data attribute on the component.

```js
export default class extends VivereComponent {
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
export default class extends VivereComponent {
  editing = false;

  onEditingChanged(oldValue) {
    if (this.editing)
      this.$nextRender(() => this.$refs.editingInput.focus());
  }
}
```

## Methods

Any methods or functions provided in our component definition our available both from within our computed (in computed properties, other methods, etc.) and available to be passed to `v-event` directives to be triggered when an event such as a `click` or `mouseover` is triggered.

```js
export default class {
  padding = 0;

  get paddingStyle() {
    return this.toPixels(this.padding);
  }

  toPixels(number) {
    return `${number}px`;
  }
};
```

## Callbacks

There are a handful of reserved method names that are automatically invoked during the life cycle of a component. By implementing one of these methods, we can automatically react to certain events. This allows us to do things like instantiating any initial data, or adding and remove custom event handlers.

```js
  export default class extends VivereComponent {
    // Connection is the first step in the lifecycle
    // when a component is instantiated
    beforeConnected() {
      // Invoked before the component is full set up,
      // before directives are set up, and before any
      // data has become reactive
    }
    connected() {
      // Invoked after the component is instantiated,
      // directives are setup, and data is reactive
    }

    // The first render occurs after the DOM is full loaded,
    // and vivere has finished a first pass of rendering every
    // directive
    rendered() {}

    // Dehydration happens before a Turbo page change, so we cache
    // a version  of the page will all of our directives in place
    beforeDehydrated() {
      // Invoked once dehydration starts,
      // before the component is dehydrated
    }
    dehydrated() {
      // Invoked after dehydration starts,
      // once the component is dehydrated
    }

    // Destruction happens when a component is removed from DOM
    beforeDestroyed() {
      // Invoked once destruction starts,
      // before the component is removed from the DOM
    }
    destroyed() {
      // Invoked after descruction starts,
      // once the component is removed from the DOM
    }
  };
```

## Internal Properties

`$element`

The HTML element at the root of this component. This is the element where the `v-component` directive was set.

`$parent`

The `$parent` component of this component. That is, the component that was last defined in the HTML above this component, or `null` if this is the first component in the tree.

`$children`

Any components defined below this component in the DOM heirarchy. As they are insantiated they will be associated with this component. Their `$parent` will be this component.

`$refs`

Any elments exposed via  a `v-ref` directive will be available inside the `$refs` object. For example, after setting up `<input v-ref="input">`, the component can reference that input element by `$refs.input`.


## Internal Methods

Components have access to a number of internal helper methods for performing more complicated operations.


<%- renderer.markdownSafe(include('/documentation/method', { method: methods.$log })) %>

Equivalent of `console.log`, that can be called from directives (since `this` is assumed before every method call).


<%- renderer.markdownSafe(include('/documentation/method', { method: methods.$emit })) %>

Attempt to send a message to a parent component.

<%- renderer.markdownSafe(include('/documentation/method', { method: methods.$attach })) %>

Inserts new HTML into the document, appending it as a child to one of your `$refs`. That html will subsequently be parsed by vivere to set up any new components, directives, etc. that are found in the new HTML. Therefore, this is the best way to attach any HTML (e.g. downloaded from the server post-rendering) that we want to also use vivere.

<%- renderer.markdownSafe(include('/documentation/method', { method: methods.$nextRender })) %>

Passes a callback method that will be invoked next time a render is completed. When a render is queued (e.g. when data used by a display directive changes), vivere will request an animation frame and batch all render updates together so that each directive is only rendered once per cycle and renders happen at an appropriate time.

Therefore, this method comes in handy if, for example, some data changed that will reveal an input that you want to focus on. The input appearing won't happen until rendering is complete, so when we see the data change we have to wait til `nextRender` in order to focus on that input element.

<%- renderer.markdownSafe(include('/documentation/method', { method: methods.$forceRender })) %>

Though this should never be necessary, `$forceRender` causes all of a component's directives to immediately queue for rendering. On the next animation frame, every directive will re-render itself.

<%- renderer.markdownSafe(include('/documentation/method', { method: methods.$destroy })) %>

Removes this component from the document. This component's elements are removed from the DOM, the component is destroyed, invoking all appropriate callbacks, and then it shuts down all of its directives and child components, etc. etc. This is the proper way to remove a component from the document to make sure nothing breaks or data gets orphaned.