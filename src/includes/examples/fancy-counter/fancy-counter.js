const FancyCounter = {
  // Initialize a data attribute called count
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    // Disable the decrement button when count drops to 0
    canDecrement() {
      return this.count > 0;
    },

    // Define a high count as >= 5
    countHigh() {
      return this.count >= 5;
    },

    // Make our display string particularly fun
    countString() {
      const { count, countHigh } = this;

      if (countHigh)
        return `Wow! Your count is ${count}!`;
      return `Your count is ${count}`;
    },
  },

  methods: {
    // Use a method to decrement the count, but
    // don't allow it if our count is already 0
    decrementCount() {
      if (this.canDecrement)
        this.count -= 1;
    },

    // Use a method to increment the count
    incrementCount() {
      this.count += 1;
    },
  }
};

Vivere.register('FancyCounter', FancyCounter);
