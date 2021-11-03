/* exported whatIsThis, someObject */

function whatIsThis() {
  return this;
}

/* This is the global window object */
whatIsThis();

var someObject = {
  aProperty: 'hullo there',
  getThis: function () {
    return this;
  }
};

/* This equals someObject */
someObject.getThis();
