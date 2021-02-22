if (typeof this.textString === 'function')
  return this.textString();
else
  return this.textString;

if (this.isLastItem)
  return '0px';
else
  return this.paddingString;
