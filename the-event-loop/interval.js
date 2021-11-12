var count = 3;
var interval = setInterval(function countDown() {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  } else {
    console.log(count);
    count = count - 1;
  }
}, 1000);
