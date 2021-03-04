export default {
  width: 0,
  interval: null,

  get widthPerc() {
    const { width } = this;
    return `${width}%`;
  },

  connected() {
    this.interval = setInterval(this.incrementWidth.bind(this), 100);
  },

  destroyed() {
    clearInterval(this.interval);
  },

  incrementWidth() {
    this.width += 1;
    if (this.width > 100)
      this.width = 0;
  },
};
