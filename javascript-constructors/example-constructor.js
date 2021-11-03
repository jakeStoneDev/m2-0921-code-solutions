function ExampleConstructor() {
}
console.log(typeof ExampleConstructor.prototype)
;

var newConstruct = new ExampleConstructor();
console.log(newConstruct)
;

console.log(newConstruct instanceof ExampleConstructor)
;
