export default {
  data() {
    return {
      record: null,
    };
  },

  passed: {
    filtering: { default: false },
  },

  computed: {
    shouldShow() {
      const { filtering, record } = this;

      if (filtering) return record.id % 2 !== 0;
      return true;
    },
  },
};