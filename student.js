/* exported student */
const student = {
  firstName: 'Jacob',
  lastName: 'Stone',
  subject: 'JavaScript',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var Intro = `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
    return Intro;
  }
}
;
student.getIntroduction()
;
