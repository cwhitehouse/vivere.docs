const ListItem = {
    // While not strictly necessary, it can be nice to
    // call out that we have a property named toDo
    toDo: {},

    // `title` is synced to our `input` while editing
    title: null,

    // `state` controls which view we see
    state: 'show',

  // We don't want to allow saving a blank
  // title when editing the toDo
  get validTitle() {
    const { title } = this;
    return !!title?.trim();
  },

  // Invoked from the `v-filter` directive, this method
  // returns true if this item should be shown
  get matchesFilter() {
    const { filterText, toDo } = this;
    const { title } = toDo;

    if (!!filterText?.trim())
      return title.toLowerCase().includes(filterText.toLowerCase());

    return true;
  },

  // This watcher will automatically trigger
  // when the state changes
  onStateChanged() {
    if (this.state === 'edit') {
      // Reset the title, so any past
      // unsaved edits, are ignored
      this.title = this.toDo.title;

      // We want to focus on the title input automatically,
      // but we need to wait until `$nextRender` to ensure
      // that it has been added to the DOM
      this.$nextRender(() => { this.$refs.title.focus(); })
    }
  },

  saveTitle() {
    if (this.validTitle) {
      this.toDo.title = this.title;
      this.state = 'show';
    }
  },

  delete() {
    // `$destroy` is an internal vivere method that removes
    // this component from the DOM and performs cleanup
    this.$destroy();
  },
};

Vivere.register('ListItem', ListItem);
