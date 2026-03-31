const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const carTList = document.querySelector('.cart-list');
const humbargur = document.querySelector('.humbargur');
const mabileManu = document.querySelector('.mabile-manu');



cartIcon.addEventListener('click', () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));
humbargur.addEventListener('click', () => mabileManu.classList.toggle('.mabile-manu-active'));

let productList = [];

const showCarts = () => {

    productList.forEach(product => {

        const orderdCard = document.createElement('div');
        orderdCard.classList.add('order-card');

        orderdCard.innerHTML = `
        <div class="card-image">
              <img src="${product.image}">
         </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.Price}</h4>
        <a href="#" class="btn card-btn ">Add to Card</a>
    `;
        cardList.appendChild(orderdCard);

        const cardBtn = orderdCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCard(product);


        });

    });

};

const addToCard = (product) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML = `
  <div class="item-image">
     <img src="${product.image}">
          </div>
          <div class="detail">
         <h4>${product.name}</h4>
      <h4 class="item-total">${product.Price}</h4>
    </div>
      <div class="flex">
        <a href="#" class="quantity-btn">
        <i class="fa-solid fa-minus"></i>
         </a>
         <h4 class="quantity-value">1</h4>
         <a href="#" class="quantity-btn">
       <i class="fa-solid fa-plus"></i>
         </a>
        </div>
 
 `;

 carTList.appendChild(cartItem);

}


const initApp = () => {

    fetch('products.json').then
        (response => response.json()).then
        (data => {

            productList = data;
            showCarts();
        })

}

initApp();