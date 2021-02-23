export default {
  data() {
    return {
      showNav: false,
      systemDark: false,
      showingModal: false,
    };
  },

  stored: {
    mode: {
      type: 'local',
      defaultValue: 'auto',
    },
  },

  computed: {
    darkMode() {
      const { mode, systemDark } = this;

      if (mode === 'light') return false;
      if (mode === 'dark') return true;
      return systemDark;
    },

    sortition() {
      return [['sortIdx'], ['asc']];
    },
  },

  methods: {
    updateSystemDark() {
      this.systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    selectMode(mode) {
      this.mode = mode;
    },
  },

  beforeConnected() {
    this.updateSystemDark();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateSystemDark.bind(this));
  },
};
