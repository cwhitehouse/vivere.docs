import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  state = 'show';

  title = null;

  toDo: { id: string | number, title: string } = { id: -1, title: null };

  get validTitle(): boolean {
    const { title } = this;
    return title && !!title.trim();
  }

  onStateChanged(): void {
    if (this.state === 'edit') {
      this.title = this.toDo.title;
      this.$nextRender(() => {
        const { title } = this.$refs;
        if (title instanceof HTMLElement)
          title.focus();
      });
    }
  }

  saveTitle(): void {
    if (this.validTitle) {
      this.toDo.title = this.title;
      this.state = 'show';
    }
  }

  delete(): void {
    this.$emit('delete', this.toDo.id);
  }
}
