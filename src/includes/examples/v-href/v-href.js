const VHref = {
  data() {
    return {
      href: null,
      label: null;
    };
  },

  methods: {
    toggleLink() {
      if (this.href == null) {
        this.href = 'https://www.google.com';
        this.label = "A link to Google..."
      } else {
        this.href = null;
        this.label = "A broken link...";
      }
    },
  },
};
