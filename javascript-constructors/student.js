/* exported Student */
function Student(first, last, subject) {
  this.firstName = first;
  this.lastName = last;
  this.subject = subject;
}

/*
var grace = new Student('Grace', 'Hopper', 'compilers');

var dennis = new Student('Dennis', 'Ritchie', 'systems programming');

var edsger = new Student('Edsgar', 'Dijkstra', 'computer science');

var donald = new Student('Donald', 'Knuth', 'algorithms');

var grady = new Student('Grady', 'Booch', 'software engineering');

var james = new Student('James', 'Gosling', 'language design');
*/

var studentProto = {
  getFullName: function (first, last, subject) {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function (first, last, subject) {
    var str = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    return str;
  }
}
;

Object.setPrototypeOf(Student.prototype, studentProto);
