const largeImg = document.querySelector('.large--img');
const smallImage = document.querySelector('.small--img__navigation');

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close'); 
const popupLarge = document.querySelectorAll('.popup--large--img');
const popupSmall = document.querySelectorAll('.popup--small--img')
let current = 0;


const subtract = document.querySelector('.minus');
const add = document.querySelector('.plus');

const numberOfItem = document.querySelector('.number-of-items');
const cart = document.querySelector('.navbar__cart__img');

const dropdown = document.querySelector('.dropdown');
const cartNumber = document.querySelector('.purchase--indicator');
const cartDisplay = document.querySelector('.details')

const submit = document.querySelector('.add-to-cart');
// const calc = document.querySelector('.price-calc');
// const result = document.querySelector('.price-result')

const previous = document.querySelector('.arrow-left');
const next = document.querySelector('.arrow-right');

const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.sidebar-close')


smallImage.addEventListener('click', e =>{
    // console.log(e.target.id);
    let imgPath = e.target.id;
    largeImg.setAttribute('src', imgPath);
})

largeImg.addEventListener('click', () => {
    popup.classList.remove('hide')
})

close.addEventListener('click', () => {
    popup.classList.add('hide');
})

subtract.addEventListener('click', () => {
    numberOfItem.innerHTML -= 1;

})


add.addEventListener('click', () => {
    numberOfItem.innerHTML++;
})

cart.addEventListener('click', () => {
    dropdown.classList.toggle('show');

})


submit.addEventListener('click', () =>{
    let num = cartNumber.innerHTML = numberOfItem.innerHTML;

    let calc = `$125 * ${cartNumber.innerHTML}`;
    let result= `$${125 * num}`;
    // result.style.fontWeight = '600';

    let html = `
    <div class="cart-details__items">
        <img class="cart-details_img" src="./images/image-product-1-thumbnail.jpg" alt="product">
        <div class="details__description">
            <p>Fall Limited Edition Sneakers</p>
            <div class="cart-item-price">
                <p class="price-calc">${calc}</p>
                <p class="price-result"><strong>${result}</strong></p>
            </div>
        </div>
        <i class="fa-solid fa-trash-can"></i>
    </div>
    <button class="cart-button">Checkout</button>
    </div>
`;

    cartDisplay.innerHTML = html;

})

function reset(){
    for(let i = 0; i < popupLarge.length; i++) {
        popupLarge[i].style.display = 'none';
    }
}


// initialize slider
function startSlide(){
    reset();
    popupLarge[0].style.display = 'block';
}

// show previous
function slideLeft() {
    reset();
    popupLarge[current - 1].style.display = 'block';
    current--
}
previous.addEventListener('click', () => {
    if(current === 0) {
        current = popupLarge.length;
    }
    slideLeft();
})

// show next 
function slideRight() {
    reset()
    popupLarge[current + 1].style.display = 'block';
    current++
}

next.addEventListener('click', () => {
    if(current === popupLarge.length - 1){
        current = -1;
    }
    slideRight();
})

startSlide();

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
})

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('hide')
})