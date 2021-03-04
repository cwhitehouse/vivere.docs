export default {
  showNav: false,
  systemDark: false,
  showingModal: false,

  stored: {
    mode: {
      type: 'local',
      defaultValue: 'auto',
    },
  },

  get darkMode() {
    const { mode, systemDark } = this;

    if (mode === 'light') return false;
    if (mode === 'dark') return true;
    return systemDark;
  },

  get sortition() {
    return [['sortIdx'], ['asc']];
  },

  beforeConnected() {
    this.updateSystemDark();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateSystemDark.bind(this));
  },

  updateSystemDark() {
    this.systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  selectMode(mode) {
    this.mode = mode;
  },
};
