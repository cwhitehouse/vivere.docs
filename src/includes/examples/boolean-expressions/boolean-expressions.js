return !!this.showElement;

return !!this.record.visible;

return this.isHidden || this.isDisabled;

if (this.isDisabled)
  return this.isHidden && this.isRed;
else
  return this.isBlue;
