export default {
  data() {
    return {
      state: 'show',
      title: null,
      toDo: {},
    };
  },

  passed: {
    filterText: { default: null },
  },

  computed: {
    validTitle() {
      const { title } = this;
      return !!title?.trim();
    },

    matchesFilter() {
      const { filterText, toDo } = this;
      const { title } = toDo;

      if (!!filterText?.trim())
        return title.toLowerCase().includes(filterText.toLowerCase());

      return true;
    },
  },

  watch: {
    state() {
      if (this.state === 'edit') {
        this.title = this.toDo.title;
        this.$nextRender(() => { this.$refs.title.focus(); })
      }
    },
  },

  methods: {
    saveTitle() {
      if (this.validTitle) {
        this.toDo.title = this.title;
        this.state = 'show';
      }
    },

    delete() {
      this.$destroy();
    },
  },
};
