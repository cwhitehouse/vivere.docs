if (typeof this.showElement === 'function')
  return this.showElement();
else
  return this.showElement;

return this.isHidden || this.isDisabled;

if (this.isDisabled)
  return this.isHidden || this.isRed;
else
  false;
