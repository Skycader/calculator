const clickHandler = (event) => {
  let sym = event.target.innerHTML;
  switch (sym) {
    case "=":
      if (document.querySelector(".input").value) calc();
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
      let data = document.querySelector(".input").value
      if (data[data.length - 1].match(/[+|\-|÷|×]/)) {
        add("(");
      } else {
        if ((data.includes("("))&&(data.match(/[(]/g).length == (data.match(/[\)]/g)||[]).length+1)) {
        add(")");
        }
      }
      break;
    default:
        let error = 0
        let symcopy = sym.replaceAll("×", "*").replaceAll("÷", "/")
        let copy = document.querySelector(".input").value.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("(","").replaceAll(")","")
        let expr = copy+=symcopy+"1"
       
        try {
            eval(expr)
        } catch(e) {
            error=1
        }
        if (!error) {
            add(sym)
        }
  }
};

const add = (value) => (document.querySelector(".input").value += value);
const calc = () =>
  (document.querySelector(".input").value = parseFloat(eval(
    document
      .querySelector(".input")
      .value.replaceAll("×", "*")
      .replaceAll("÷", "/")
  ).toFixed(6)));

document.querySelector("#root").addEventListener("click", clickHandler);
