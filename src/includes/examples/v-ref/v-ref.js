class VRef extends VivereComponent {
  focusInput() {
    // Our `v-ref` directive let's us reference the
    // input easily from our component script
    this.$refs.text.focus();
  }
};
Vivere.register('VRef', VRef);
