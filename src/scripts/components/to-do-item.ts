import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  state = 'show';

  title = null;

  toDo: { title: string } = { title: null };

  filterText = null;

  $passed = {
    filterText: { default: null },
  };

  get validTitle(): boolean {
    const { title } = this;
    return title && !!title.trim();
  }

  get matchesFilter(): boolean {
    const { filterText, toDo } = this;
    const { title } = toDo;

    if (filterText && !!filterText.trim())
      return title.toLowerCase().includes(filterText.toLowerCase());

    return true;
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
    this.$destroy();
  }
}
