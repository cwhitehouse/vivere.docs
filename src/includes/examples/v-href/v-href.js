class VHref extends VivereComponent {
  href = null;
  label = null;

  toggleLink() {
    if (this.href == null) {
      this.href = 'https://www.google.com';
      this.label = "A link to Google..."
    } else {
      this.href = null;
      this.label = "A broken link...";
    }
  }
}
Vivere.register('VHref', VHref);
