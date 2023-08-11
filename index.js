let temp = "";
let btn = document.querySelectorAll("button");
Array.from(btn).forEach((i) => {
  i.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      temp = eval(temp);
      let display = (document.querySelector("input").value = temp);
    } else if (e.target.innerHTML == "AC") {
      temp = "";
      let display = (document.querySelector("input").value = temp);
    } else if (e.target.innerHTML == "C") {
      temp = temp.slice(0, -1);
      let display = (document.querySelector("input").value = temp);
    } else {
      temp = temp + e.target.innerHTML;
      document.querySelector("input").value = temp;
    }
  });
});
