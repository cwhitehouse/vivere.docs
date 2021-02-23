const VStyle = {
  data() {
    return {
      width: 0,
      interval: null,
    };
  },

  computed: {
    widthPerc() {
      const { width } = this;
      return `${width}%`;
    },
  },

  methods: {
    incrementWidth() {
      this.width += 1;
      if (this.width > 100)
        this.width = 0;
    },
  },

  connected() {
    this.interval = setInterval(this.incrementWidth.bind(this), 100);
  },

  destroyed() {
    cancelInterval(this.interval);
  },
};
Vivere.register('VStyle', VStyle);
