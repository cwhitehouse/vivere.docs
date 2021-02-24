export default {
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    canDecrement() {
      return this.count > 0;
    },

    countHigh() {
      return this.count >= 5;
    },

    countString() {
      const { count, countHigh } = this;

      if (countHigh)
        return `Wow! Youre count is ${count}!`;
      return `Your count is ${count}`;
    },
  },

  methods: {
    decrementCount() {
      if (this.canDecrement)
        this.count -= 1;
    },
  }
};
