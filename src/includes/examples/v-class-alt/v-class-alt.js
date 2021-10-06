export default class VClass {
  blue = true;

  get textClasses() {
    const { blue } = this;

    if (blue) return ['text-blue', 'italic'];
    return ['text-red'];
  }
}
Vivere.register('VClass', VClass);