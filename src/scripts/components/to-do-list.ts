import { VivereComponent } from 'vivere';

let id = 3;

export default class extends VivereComponent {
  filterText = null;

  sortMode = null;

  creating = false;

  title = null;

  items: { id: string | number, title: string }[];

  get orderBy(): [string, boolean] {
    const { sortMode } = this;

    switch (sortMode) {
      case 'idAsc':
        return ['id', true];
      case 'idDesc':
        return ['id', false];
      case 'titleAsc':
        return ['title', true];
      case 'titleDesc':
        return ['title', false];
      default:
        return null;
    }
  }

  get renderedItems(): { id: string | number, title: string }[] {
    const { items, orderBy, filterText } = this;
    const [key, ascending] = orderBy;

    let renderedItems = items;

    const lowerFilterText = filterText.toLowerCase();
    if (filterText?.length)
      renderedItems = renderedItems.filter((item) => item.title.toLocaleLowerCase().includes(lowerFilterText));

    if (orderBy?.length)
      renderedItems = renderedItems.toSorted((a, b) => {
        const aProp = a[key];
        const bProp = b[key];

        if (aProp === bProp)
          return 0;
        if (aProp < bProp)
          return ascending ? -1 : 1;
        return ascending ? 1 : -1;
      });

    return renderedItems;
  }

  get validTitle() : boolean {
    const { title } = this;
    return title && !!title.trim();
  }

  onCreatingChanged(): void {
    if (this.creating) {
      this.title = null;
      this.$nextRender(() => {
        const { title } = this.$refs;
        if (title instanceof HTMLElement)
          title.focus();
      });
    }
  }

  create(): void {
    const { title, validTitle } = this;

    if (!validTitle) return;

    id += 1;

    this.items.push({ id, title });

    this.creating = false;
  }

  removeItem(itemId: string | number): void {
    // eslint-disable-next-line eqeqeq
    this.items = this.items.filter((item) => item.id != itemId);
  }
}
