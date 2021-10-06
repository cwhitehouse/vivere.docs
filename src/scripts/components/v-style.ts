import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  width = 0;

  interval = null;

  get widthPerc(): string {
    const { width } = this;
    return `${width}%`;
  }

  connected(): void {
    this.interval = setInterval(this.incrementWidth.bind(this), 100);
  }

  destroyed(): void {
    clearInterval(this.interval);
  }

  incrementWidth(): void {
    this.width += 1;
    if (this.width > 100)
      this.width = 0;
  }
}
