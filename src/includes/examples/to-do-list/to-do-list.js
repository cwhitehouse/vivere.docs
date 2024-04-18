import axios from 'axios';

class List extends VivereComponent {
  // This will track what's been typed into
  // our text `input` search field
  filterText = null;

  // This will track whichever sort value
  // we've selected in our `select`
  sortMode = null;

  // Tracks whether we're trying to create
  // a new to do
  creating = false;

  // Tracks the title of the new to do
  // from our text `input`
  title = null;

  // A computed property that will be
  // passed to v-sort to control how
  // we will be sorting
  get orderBy() {
    const { sortMode } = this;

    switch (sortMode) {
      case 'idAsc':
        return ['id', true];
      case 'idDesc':
        return ['id', false];
      case 'titleAsc':
        return ['title', true];
      case 'titleDesc':
        return ['title', false];
      default:
        return null;
    }
  }

  // Computed property that controls
  // which items we want to render and
  // in what order
  get renderedItems() {
    const { items, orderBy, filterText } = this;
    const [key, ascending] = orderBy;

    return items
      .filter((i) => i.title.includes(filterText))
      .toSorted((a,b) => a[key] > b[key] ? (ascending ? 1 : -1) : (ascending ? -1 : 1))
  }

  get validTitle() {
    const { title } = this;
    return !!title?.trim();
  }

  // This watcher will automatically trigger
  // when `creating` is toggled
  onCreatingChanged() {
    if (this.creating) {
      // Reset the title, so any past
      // unsaved edits, are ignored
      this.title = null;

      // We want to focus on the title input automatically,
      // but we need to wait until `$nextRender` to ensure
      // that it has been added to the DOM
      this.$nextRender(() => { this.$refs.title.focus(); });
    }
  }

  create() {
    const { title, validTitle } = this;
    if (!validTitle) return;

    // What we'd probably do here is post to the server
    // and receive the new item as JSON
    const item = axios.post('/to-dos', { title });

    // We want to add our new item to the list to be rendered,
    // v-for will take care of that
    this.items.push(item);

    this.creating = false;
  }

  // Method for removing an item from our list
  deleteItem(id) {
    this.items = this.items
      .filter((i) => i.id === id)
  }
};
Vivere.register('List', List);