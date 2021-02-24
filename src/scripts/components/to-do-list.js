let id = 3;

export default {
  data() {
    return {
      filterText: null,
      sortMode: null,
      creating: false,
      title: null,
    }
  },

  computed: {
    orderBy() {
      const { sortMode } = this;

      switch (sortMode) {
        case 'idAsc':
          return [['toDo.id'], ['asc']];
        case 'idDesc':
          return [['toDo.id'], ['desc']];
        case 'titleAsc':
          return [['toDo.title'], ['asc']];
        case 'titleDesc':
          return [['toDo.title'], ['desc']];
        default:
          return null;
      };
    },

    validTitle() {
      const { title } = this;
      return title && !!title.trim();
    },
  },

  watch: {
    creating() {
      if (this.creating) {
        this.title = null;
        this.$nextRender(() => { this.$refs.title.focus(); });
      }
    },
  },

  methods: {
    create() {
      const { title, validTitle } = this;

      if (!validTitle) return;

      id += 1;
      const html = `
<div
  v-component="to-do-item"
  v-data:to-do='${JSON.stringify({ id, title })}'
  v-pass:filter-text
  class="flex items-stretch h-12"
>
  <div
    v-if="state === 'show'"
    class="flex items-center w-full"
  >
    <input
      type="checkbox"
      v-sync="toDo.complete"
      class="ml-1"
    >
    <p class="ml-4 w-6 text-sm text-gray-500">#<span v-text="toDo.id"></span></p>
    <p
      v-text="toDo.title"
      v-class:line-through="toDo.complete"
      v-class:italic="toDo.complete"
      v-class:text-gray-700="toDo.complete"
      class="flex-1 ml-2"
    ></p>
    <button
      v-event:click="state = 'edit'"
      v-disabled="toDo.complete"
      class="button"
    >Edit...</button>
    <button
      v-event:click="state = 'delete'"
      v-disabled="toDo.complete"
      class="button ml-2"
    >Delete...</button>
  </div>
  <div
    v-if="state === 'edit'"
    class="flex items-center w-full"
  >
    <input
      v-sync="title"
      v-ref="title"
      v-event:keydown.enter="saveTitle"
      v-event:keydown.escape="state = 'show'"
      type="text"
      placeholder="Choose a title..."
      class="h-8 flex-1 rounded px-3 border-2 border-gray-300 mr-2"
    ></input>
    <button
      v-event:click="saveTitle"
      v-disabled="!validTitle"
      class="button text-teal-600 mr-2"
    >Save</button>
    <button
      v-event:click="state = 'show'"
      class="button"
    >Cancel</button>
  </div>
  <div
    v-if="state === 'delete'"
    class="flex items-center w-full"
  >
    <p class="flex-1 text-red-800 dark:text-red-400 ml-2">Are you sure you want to delete this to-do?</p>
    <button
      v-event:click="delete"
      class="button text-red-600 dark:text-red-300 mr-2"
    >Delete</button>
    <button
      v-event:click="state = 'show'"
      class="button"
    >Cancel</button>
  </div>
</div>
      `;

      this.$attach(html, 'items');
      this.creating = false;
    },
  }
};
