import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  href = null;

  label = 'A broken link...';

  toggleLink(): void {
    if (this.href == null) {
      this.href = 'https://www.google.com';
      this.label = 'A link to Google...';
    } else {
      this.href = null;
      this.label = 'A broken link...';
    }
  }
}
