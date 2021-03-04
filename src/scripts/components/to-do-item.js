export default {
  state: 'show',
  title: null,
  toDo: {},

  passed: {
    filterText: { default: null },
  },

  get validTitle() {
    const { title } = this;
    return title && !!title.trim();
  },

  get matchesFilter() {
    const { filterText, toDo } = this;
    const { title } = toDo;

    if (filterText && !!filterText.trim())
      return title.toLowerCase().includes(filterText.toLowerCase());

    return true;
  },

  onStateChanged() {
    if (this.state === 'edit') {
      this.title = this.toDo.title;
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
    this.$destroy();
  },
};
