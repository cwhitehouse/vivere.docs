export default {
  count: 0,

  get canDecrement() {
    return this.count > 0;
  },

  get countHigh() {
    return this.count >= 5;
  },

  get countString() {
    const { count, countHigh } = this;

    if (countHigh)
      return `Wow! Youre count is ${count}!`;
    return `Your count is ${count}`;
  },

  decrementCount() {
    if (this.canDecrement)
      this.count -= 1;
  },
};
