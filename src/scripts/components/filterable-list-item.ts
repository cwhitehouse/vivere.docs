import { VivereComponent } from 'vivere';

export default class extends VivereComponent {
  record = null;

  filtering = false;

  $passed = {
    filtering: { default: false },
  };

  get shouldShow(): boolean {
    const { filtering, record } = this;

    if (filtering) return record.id % 2 !== 0;
    return true;
  }
}
