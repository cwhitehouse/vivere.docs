this.takeAction();

this.record.activate();

this.acting = false;

this.acting = !this.acting;

if (this.acting)
  this.color = 'red';
else
  this.color = null;

if (this.waiting)
  this.acting = !this.acting;
else
  this.acting = false;
