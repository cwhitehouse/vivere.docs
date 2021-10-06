import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  showNav = false;

  systemDark = false;

  showingModal = false;

  mode = 'auto';

  $stored: {
    mode: {
      type: 'local',
      default: 'auto',
    },
  };

  get darkMode(): boolean {
    const { mode, systemDark } = this;

    if (mode === 'light') return false;
    if (mode === 'dark') return true;
    return systemDark;
  }

  get sortition(): [string[], string[]] {
    return [['sortIdx'], ['asc']];
  }

  beforeConnected(): void {
    this.updateSystemDark();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateSystemDark.bind(this));
  }

  updateSystemDark(): void {
    this.systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  selectMode(mode: string): void {
    this.mode = mode;
  }
}
