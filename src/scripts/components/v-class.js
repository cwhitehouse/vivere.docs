export default {
  blue: true,

  get textClasses() {
    const { blue } = this;

    if (blue) return ['text-indigo-600', 'dark:text-indigo-400', 'italic'];
    return ['text-red-600', 'dark:text-red-400'];
  },
}