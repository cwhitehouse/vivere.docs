export default {
  record: null,

  passed: {
    filtering: { default: false },
  },

  get shouldShow() {
    const { filtering, record } = this;

    if (filtering) return record.id % 2 !== 0;
    return true;
  },
};