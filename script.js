
console.log(document.querySelector(".add"));

const sum = () => {
  let a = parseInt(document.querySelector(".a").value);
  let b = parseInt(document.querySelector(".b").value);
  document.querySelector(".answer").innerHTML = a+b;
  
}

const event = () => { document.querySelector(".add").addEventListener("click", sum);}

event();