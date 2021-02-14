export default {
  data() {
    return {
      state: 'show',
      title: null,
      toDo: {},
    };
  },

  computed: {
    validTitle() {
      const { title } = this;
      return title != null
        && title.length > 0;
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
