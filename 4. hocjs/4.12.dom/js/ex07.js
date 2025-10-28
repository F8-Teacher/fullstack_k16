//DOM Node
const root = document.querySelector("#root");

//1. createElement
const h1 = document.createElement("h1");
h1.innerText = "F8 - Học lập trình không khó";
h1.classList = "title";

//append
root.append(h1);

const h2 = document.createElement("h2");
h2.innerText = "Xin chào F8";

//prepend
root.prepend(h2);

const btn = document.createElement("button");
btn.innerText = "Click me";
btn.addEventListener("click", () => {
  h1.innerText = "Ok chưa?";
});
root.append(btn);

//2. insertBefore
const h3 = document.createElement("h3");
h3.innerText = "Học js";
root.insertBefore(h3, h1);

//3. replaceChild
const p = document.createElement("p");
p.innerText = `Ahihi`;
root.replaceChild(p, h1);

// root.append(h1);

//4. removeChild
root.removeChild(h2);

//5. textNode
const counterHeading = document.createElement("h2");
counterHeading.innerText = `Count: `;
// const span = document.createElement("span");
// span.innerText = 0;
const textNode = document.createTextNode(0);
counterHeading.append(textNode);
root.append(counterHeading);
const plusBtn = document.createElement("button");
plusBtn.innerText = "+";
plusBtn.addEventListener("click", () => {
  //   span.innerText++;
  textNode.data++;
});
root.append(plusBtn);
