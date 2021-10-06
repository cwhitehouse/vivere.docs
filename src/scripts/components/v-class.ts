import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  blue = true;

  get textClasses(): string[] {
    const { blue } = this;

    if (blue) return ['text-indigo-600', 'dark:text-indigo-400', 'italic'];
    return ['text-red-600', 'dark:text-red-400'];
  }
}
