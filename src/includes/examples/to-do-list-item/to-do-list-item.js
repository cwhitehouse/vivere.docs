class ListItem extends VivereComponent {
    // While not strictly necessary, it can be nice to
    // call out that we have a property named toDo
    toDo = {};

    // `title` is synced to our `input` while editing
    title = null;

    // `state` controls which view we see
    state = 'show';

  // We don't want to allow saving a blank
  // title when editing the toDo
  get validTitle() {
    const { title } = this;
    return !!title?.trim();
  }

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
  }

  saveTitle() {
    if (this.validTitle) {
      this.toDo.title = this.title;
      this.state = 'show';
    }
  }

  delete() {
    // Tell our parent to remove this item
    // from the list by emitting an event
    this.$emit('delete', this.toDo.id);
  }
};
Vivere.register('ListItem', ListItem);
