//alert("hola desde JS!");
console.log("hola desde consola");

// Lectura

console.log(document.getElementById("lorem1"));

console.log(document.getElementById("lorem1").innerHTML); // contenido

// Escritura
document.getElementById("lorem1").innerHTML = "Hora de comer pizza";

const pElements = document.getElementsByTagName("p");

console.log(pElements);

const elements = document.getElementsByClassName("super-class");

console.log(elements);
console.log(elements[1].innerHTML);

//TAG
document.getElementsByTagName("a");
document.getElementsByTagName("a")[1];
document.getElementsByTagName("a")[1].href;

// Todas las <a>
const links = document.getElementsByTagName("a");

// Todos los links
for (let i = 0; i < links.length; i++) {
  console.log(links[i].href, links[i].innerHTML);
  if (i % 2 == 0) {
    links[i].innerHTML += " impreso";
    links[i].className = "impreso";
  }
}

// QuerySelector/all
const element = document.querySelector("p.super-class")

const elements2 =
document.querySelectorAll("p.super-class")

// Query Selector
console.log("******************");

let lista2 = document.querySelectorAll(".clase2 > a");
console.log(lista2[0].href);
console.log(lista2[1].href);



console.log(document.querySelector('#miDiv .miClase').innerText)
console.log(document.querySelector('#miDiv #miId1.miClase').innerText)
let textos = document.querySelectorAll("#miDiv .miClase");

// Todos los links
for (let i = 0; i < textos.length; i++) {
    console.log("hey! "+textos[i].innerHTML);
}

// Crear un párrafo desde JS y añadirlo al DOM
let newP = document.createElement("p");
let txt = document.createTextNode("He comido bocadillo");

//newP.className = "impreso";
newP.setAttribute("class","impreso");

newP.appendChild(txt); //unir nodos
//unir el párrafo al body del DOM (lo más genérico y menos recomendado)
document.body.appendChild(newP);

document.querySelector("#textos").appendChild(newP);

// Eventos
let btn1 = document.getElementById("btn1");
let res1 = document.querySelector("#result");


function clickado() {
  res1.innerHTML = "jeje. Gracias por clickar &#127183;";
  alert( "clickado!");
  document.body.classList.toggle("night");
}

btn1.addEventListener("click",clickado); // con función externa

btn1.addEventListener("mouseover",function(){
  res1.innerHTML = "jeje. Estás list@ para clickar?? &#127183;";
})

btn1.addEventListener("mouseout",function(){
  res1.innerHTML = "&#128064; no vuelves?";
})


