const Counter = {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    decrementCount() {
      this.count -= 1;
    },
    incrementCount() {
      this.count += 1;
    },
  },
};
Vivere.register('Counter', Counter);
