var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');

var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');
var tab4 = document.getElementById('tab4');
var finalTab = document.getElementById('tab5');

var tabCounter = 1;
var previousTabCounter = tabCounter - 1;
var currentTabName = 'tab';
var previousTabName = 'tab';

var leftArrow = document.getElementById('leftArrow')
  ;
var rightArrow = document.getElementById('rightArrow')
  ;
var carouselInterval = setInterval(carousel, 3000);

leftArrow.addEventListener('click', function (e) {
  tabCounter = tabCounter - 1;
  clearInterval(carouselInterval);
  carouselInterval = setInterval(carousel, 3000);
  handleTabs();
});

rightArrow.addEventListener('click', function (e) {
  tabCounter = tabCounter + 1;
  clearInterval(carouselInterval);
  carouselInterval = setInterval(carousel, 3000);
  handleTabs();
});

document.addEventListener('click', function () {
  if (event.target === tab1) {
    tabCounter = 1;
    handleTabs();
  } else if (event.target === tab2) {
    tabCounter = 2;
    handleTabs();
  } else if (event.target === tab3) {
    tabCounter = 3;
    handleTabs();
  } else if (event.target === tab4) {
    tabCounter = 4;
    handleTabs();
  } else if (event.target === finalTab) {
    tabCounter = 5;
    handleTabs();
  }
  clearInterval(carouselInterval);
  carouselInterval = setInterval(carousel, 3000);
});

function carousel() {
  currentTabName = currentTabName + tabCounter;
  var currentTab = document.getElementById(currentTabName);
  currentTab.className = 'fas fa-circle tab';
  if (previousTabCounter >= 1) {
    previousTabName = previousTabName + previousTabCounter;
  }
  tabCounter++;
  previousTabCounter++;
  handleTabs();
  currentTabName = 'tab';
  previousTabName = 'tab';
}

function handleTabs() {
  if (tabCounter === 6 || tabCounter < 1) {
    finalTab.className = 'far fa-circle tab';
    tabCounter = 1;
    previousTabCounter = 0;
  }
  if (tabCounter === 1) {
    img1.className = 'show';
    tab1.className = 'fas fa-circle tab';
  } else {
    img1.className = '';
    tab1.className = 'far fa-circle tab';
  }
  if (tabCounter === 2) {
    img2.className = 'show';
    tab2.className = 'fas fa-circle tab';
  } else {
    img2.className = '';
    tab2.className = 'far fa-circle tab';
  }
  if (tabCounter === 3) {
    img3.className = 'show';
    tab3.className = 'fas fa-circle tab';
  } else {
    img3.className = '';
    tab3.className = 'far fa-circle tab';
  }
  if (tabCounter === 4) {
    img4.className = 'show';
    tab4.className = 'fas fa-circle tab';
  } else {
    img4.className = '';
    tab4.className = 'far fa-circle tab';
  }
  if (tabCounter === 5) {
    img5.className = 'show';
    finalTab.className = 'fas fa-circle tab';
  } else {
    img5.className = '';
    finalTab.className = 'far fa-circle tab';
  }
}
