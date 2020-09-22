const menu = [
  {
    id: 1,
    title: "Taza Elmo",
    category: "taza",
    price: 10.00,
    img: "./images/elmoSesamo.jpg",
    desc: `Taza blanca con figura Elmo de barrio sesamo.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/559925420-taza-blanca-con-imagen-elmo`,
  },
  {
    id: 2,
    title: "Taza Epi y Blas",
    category: "taza",
    price: 10.00,
    img: "./images/epiBlas.jpg",
    desc: `Taza blanca con figura Epi y Blas de barrio sesamo. `,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/618823740-taza-blanca-epi-y-blas`,
  },
  {
    id: 3,
    title: "Camiseta Epi y Blas",
    category: "camiseta",
    price: 10.00,
    img: "./images/EpiBlas.png",
    desc: `Camiseta blanca estampado Epi y Blas, con frase "Mi barrio es el mejor.`,
    comprar:`https://es.wallapop.com/item/taza-blanca-epi-y-blas-382573041`,
  },
  {
    id: 4,
    title: "Camiseta Homer",
    category: "camiseta",
    price: 20.99,
    img: "./images/HomerCerveza.jpg",
    desc: `Camiseta blanca estampado Homer, con frase: Quiero ahogar mis penas en cerveza. `,
    comprar:`https://es.wallapop.com/item/taza-blanca-epi-y-blas-382573041`,
  },
  {
    id: 5,
    title: "Taza Homer",
    category: "taza",
    price: 10.00,
    img: "./images/homer.jpg",
    desc: `Taza blanca con figura Homer Simpson, con jarra de cerveza.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/558542600-taza-blanca-estampado-homer-simpson`,
  },
  {
    id: 6,
    title: "Camiseta Lisa",
    category: "camiseta",
    price: 12,
    img: "./images/lisaSipsom.jpg",
    desc: `Camiseta blanca estampado Lisa, con frase: Where is my pacifier.`,
    comprar:`https://es.wallapop.com/item/taza-blanca-epi-y-blas-382573041`,
  },
  {
    id: 7,
    title: "Camiseta viaje NY",
    category: "camiseta",
    price: 12,
    img: "./images/ViajeNyc.jpg",
    desc: `Camiseta blanca estampado viaje a New York, con frase: I survived my trip to NYC. `,
    comprar:`https://es.wallapop.com/item/taza-blanca-epi-y-blas-382573041`,
  },
  {
    id: 8,
    title: "Taza Batman",
    category: "taza",
    price: 10.00,
    img: "./images/batmanTaza2.jpg",
    desc: `Taza blanca con imagen Batman, material ceramica`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/569611032-taza-blanca-imagen-batman`,
  },
  {
    id: 9,
    title: "Taza capitan america",
    category: "taza",
    price: 10,
    img: "./images/capitan2.jpg",
    desc: `Taza blanca capitan America, material ceramica.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/568171575-taza-blanca-capitan-america`,
  },
  {
    id: 10,
    title: "Taza seleccion Colombia",
    category: "taza",
    price: 10.00,
    img: "./images/colombiaTaza2.jpg",
    desc: `Taza blanca seleccion colombia con imagen de la bandera y escudo.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/560888302-taza-blanca-con-escudo-y-bandera-de-seleccion-colombia`,
  },
  {
    id: 11,
    title: "Taza Epi Y blas",
    category: "taza",
    price: 10.00,
    img: "./images/epiyBlasTaza2.jpg",
    desc: `Taza blanca ceramica, con imagen Epi y Blas.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/618830582-taza-blanca-epi-y-blas`,
  },
  {
    id: 12,
    title: "Taza Homer y Bart",
    category: "taza",
    price: 10.00,
    img: "./images/homerBart1.jpg",
    desc: `Taza blanca ceramica con imagen Homer Y Bart Simpson.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/561547554-taza-blanca-con-imagen-homer-y-bart-simpson`,
  },
   
  {
    id: 14,
    title: "Taza Venom",
    category: "taza",
    price: 10.00,
    img: "./images/venomTaza1.jpg",
    desc: `Taza blanca ceramica, con imagen superheroe Venom.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/571188322-taza-blanca-venom`,
  },
  {
    id: 15,
    title: "Taza Spiderman",
    category: "taza",
    price: 10.00,
    img: "./images/spiderman.jpg",
    desc: `Taza blanca ceramica, con imagen superheroe Spiderman.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/569641654-taza-blanca-spiderman`,
  },
   
  {
    id: 17,
    title: "Taza Francia",
    category: "taza",
    price: 10.00,
    img: "./images/tazaFrancia.jpg",
    desc: `Taza blanca ceramica, con imagen seleccion Francia.`,
    comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/572668045-taza-blanca-seleccion-francia`,
  },
{
  id: 18,
  title: "Taza los Pitufos",
  category: "taza",
  price: 10.00,
  img: "./images/pitufosTazas1.jpg",
  desc: `Taza blanca ceramica, con imagen seleccion Francia.`,
  comprar:`https://www.vinted.es/maison/tasses-and-tasses-a-cafe/618851442-taza-blanca-los-pitufos`,

},
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">€ ${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
      <p></p>
      <a href=${item.comprar} target="_blank"><button type="button" class="button is-primary">Comprar</button></a> 
    </div> 
  </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Todo"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Todo") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
