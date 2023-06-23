const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btnsBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {}; //creamos un objeto carrito

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta); //con dataset resivimos el valor de el atributo data-fruta

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.id)) {
    //solo si existe el id, es decir si ya hay un producto agregado se ejecuta
    producto.cantidad = carritoObjeto[producto.id].cantidad + 1; //trae la cantidad que tiene y le suma 1
  }

  carritoObjeto[producto.titulo] = producto; //se agrega el producto al objeto carrito

  pintarCarrito(producto);
};

// Froma con innerHTMl 

// let template = "";

// const pintarCarrito = (producto) => {
//   console.log("pintar carrito", producto);

//   template = "";

//   Object.values(carritoObjeto).forEach((item) => {
// //    template = ""; // para que el carrito parta vacio y no se me repita informacion con el forEach

//     template += `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             <span class="lead">${item.titulo}</span>
//             <span class="badge bg-primary rounded-pill">${item.cantidad}</span>
//         </li>`;

//   }); //trasformar en array para iterar

//   carrito.innerHTML = template;
// };

// btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

// Forma con template  clone

// const pintarCarrito = (producto) => {
//   console.log("pintar carrito", producto);

//   Object.values(carritoObjeto).forEach((item) => {
//     carrito.textContent = "";

//     const clone = template.content.firstElementChild.cloneNode(true);
//     clone.querySelector(".lead").textContent = item.titulo;
//     clone.querySelector(".badge").textContent = item.cantidad;

//     // evitar reflow
//     fragment.appendChild(clone);
//   }); //trasformar en array para iterar

//   carrito.appendChild(fragment);
// };

// btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));



// utilizando metodo map

const pintarCarrito = (producto) => {
  console.log("pintar carrito", producto);

  const itemsCarrito = Object.values(carritoObjeto).map((item) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="lead">${item.titulo}</span>
          <span class="badge bg-primary rounded-pill">${item.cantidad}</span>
      </li>`);

  const carritoHTML = itemsCarrito.join(""); // Unir los elementos del array en una cadena

  carrito.innerHTML = carritoHTML;
};

btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
