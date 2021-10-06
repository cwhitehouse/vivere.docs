class Counter extends VivereComponent {
  count = 0;

  decrementCount() {
    this.count -= 1;
  }

  incrementCount() {
    this.count += 1;
  }
};
Vivere.register('Counter', Counter);
