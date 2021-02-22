export default {
  data() {
    return {
      href: null,
    };
  },

  methods: {
    toggleLink() {
      if (this.href == null) this.href = 'https://www.google.com';
      else this.href = null;
    },
  },
};
