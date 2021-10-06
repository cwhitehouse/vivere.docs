class VStyle extends VivereComponent {
  // Data
  width = 0;
  interval = null;

  // Computed
  get widthPerc() {
    const { width } = this;
    return `${width}%`;
  }

  // Lifecycle Callbacks
  connected() {
    const binding =
      this.incrementWidth.bind(this);

    this.interval =
      setInterval(binding, 100);
  }

  destroyed() {
    cancelInterval(this.interval);
  }

  // Methods
  incrementWidth() {
    this.width += 1;
    if (this.width > 100)
      this.width = 0;
  }
};
Vivere.register('VStyle', VStyle);
