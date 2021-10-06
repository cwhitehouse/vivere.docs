import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  count = 0;

  get canDecrement(): boolean {
    return this.count > 0;
  }

  get countHigh(): boolean {
    return this.count >= 5;
  }

  get countString(): string {
    const { count, countHigh } = this;

    if (countHigh)
      return `Wow! Youre count is ${count}!`;
    return `Your count is ${count}`;
  }

  decrementCount(): void {
    if (this.canDecrement)
      this.count -= 1;
  }
}
