const { default: axios } = require("axios");

const List = {
  data() {
    return {
      // This will track what's been typed into
      // our text `input` search field
      filterText: null,

      // This will track whichever sort value
      // we've selected in our `select`
      sortMode: null,

      // Tracks whether we're trying to create
      // a new to do
      creating: false,

      // Tracks the title of the new to do
      // from our text `input`
      title: null,
    }
  },

  computed: {
    orderBy() {
      const { sortMode } = this;

      switch (sortMode) {
        case 'idAsc':
          return [['toDo.id'], ['asc']];
        case 'idDesc':
          return [['toDo.id'], ['desc']];
        case 'titleAsc':
          return [['toDo.title'], ['asc']];
        case 'titleDesc':
          return [['toDo.title'], ['desc']];
        default:
          return null;
      };
    },

    validTitle() {
      const { title } = this;
      return !!title?.trim();
    },
  },

  watch: {
    // This watcher will automatically trigger
    // when `creating` is toggled
    creating() {
      if (this.creating) {
        // Reset the title, so any past
        // unsaved edits, are ignored
        this.title = null;

        // We want to focus on the title input automatically,
        // but we need to wait until `$nextRender` to ensure
        // that it has been added to the DOM
        this.$nextRender(() => { this.$refs.title.focus(); });
      }
    },
  },

  methods: {
    create() {
      const { title, validTitle } = this;
      if (!validTitle) return;

      // What we'd probably do here is post to the server
      // and receive the fully rendered html for a to-do
      // so we don't have to know how to render one
      const html = axios.post('/to-dos', { title });

      // $attach is a special method that attaches new html
      // to the DOM via a named `ref` (items), and automatically
      // parses all of the Vivere directives on the new HTML
      this.$attach(html, 'items');

      this.creating = false;
    },
  }
};

Vivere.register('List', List);