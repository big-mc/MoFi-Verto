window.onscroll = function() {stickyHeader()};

var header = document.getElementById("navbar");
console.log("hi");

function stickyHeader() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
