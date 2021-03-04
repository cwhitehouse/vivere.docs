const ListItem = {
  // While not strictly necessary, it can be nice to
  // call out that we have a property named record
  record: null,

  // Inherit the `filtering` property from
  // this component's parent
  passed: {
    filtering: { default: false },
  },

  // Always show if we're not filtering, otherwise
  // only show records with odd id's
  get shouldShow() {
    const { filtering, record } = this;
    if (filtering) return record.id % 2 !== 0;
    return true;
  },
};

Vivere.register('ListItem', ListItem);
