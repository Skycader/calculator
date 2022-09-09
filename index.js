const clickHandler = (event) => {
  let sym = event.target.innerHTML;
  switch (sym) {
    case "=":
      calc();
      break;
    case "AC":
      document.querySelector(".input").value = "";
      break;
    case "⌫":
      document.querySelector(".input").value = document
        .querySelector(".input")
        .value.slice(0, -1);
      break;
    case "()":
      break;
    default:
      add(sym);
  }
};

const add = (value) => (document.querySelector(".input").value += value);
const calc = () =>
  (document.querySelector(".input").value = eval(
    document.querySelector(".input").value.replaceAll("×", "*").replaceAll("÷","/")
  ));

document.querySelector("#root").addEventListener("click", clickHandler);
