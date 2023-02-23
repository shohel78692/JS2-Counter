let text = document.getElementById("text"); 
let dec = document.getElementById("dec");
let res = document.getElementById("res");
let inc = document.getElementById("inc"); 
let count = 0;


function decrement() {
  count--;
  text.innerHTML = count;
  if (count < 0) {
    text.style.color = "red";
  }
}
function increment() {
    count++;
    text.innerHTML = count;
    if (count > 0) {
      text.style.color = "green";
    }
  }
  function reset() {
    count = 0;
    text.innerHTML = count;
    text.style.color = "black";
  }


