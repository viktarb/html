// JavaScript source code
const productos = [
    { nombre: "Camisa", cantidad: 5, precio: 1500 },
    { nombre: "Pantalon", cantidad: 3, precio: 2500 },
    { nombre: "Zapatos", cantidad: 2, precio: 3500 },
    { nombre: "Sombrero", cantidad: 4, precio: 1200 },
];

console.table(productos);
console.log("El total de las " + productos[0]["nombre"] +
    " es: " + productos[0]["cantidad"] * productos[0]["precio"] +
    " euros, de los " + productos[1]["nombre"] + "es es " +
    productos[1]["cantidad"] * productos[1]["precio"] + " euros, mientras que el de los " +
    productos[2]["nombre"] + " es de " + productos[2]["cantidad"] * productos[2]["precio"] +
    " euros.");

let costeTotalAlmacen = 0;
for (let i = 0; i < productos.length; i++) {
    costeTotalAlmacen += productos[i]["cantidad"] * productos[i]["precio"];
}

console.log("El total valor del almacen es: " + costeTotalAlmacen + " euros.");


Creada un nueva lídea desde le Hub
