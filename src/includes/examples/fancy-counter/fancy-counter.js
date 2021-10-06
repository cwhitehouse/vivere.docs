class FancyCounter extends VivereComponent {
  // Initialize a data attribute called count
  count = 0;

  get canDecrement() {
    return this.count > 0;
  }

  // Define a high count as >= 5
  get countHigh() {
    return this.count >= 5;
  }

  // Make our display string particularly fun
  get countString() {
    const { count, countHigh } = this;

    if (countHigh)
      return `Wow! Your count is ${count}!`;
    return `Your count is ${count}`;
  }

  // Use a method to decrement the count, but
  // don't allow it if our count is already 0
  decrementCount() {
    if (this.canDecrement)
      this.count -= 1;
  }
};
Vivere.register('FancyCounter', FancyCounter);
