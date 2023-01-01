const shoeContent = [
  {
    name: 'Air Force 1s',
    img: '/bild1.png',
    alt: 'Nike airforce skor',
    price: '999',
    amountTot: '',
    brand: 'NIKE',
  },
  {
    name: 'HEEL MESH ',
    img: 'public/bild2.jpg',
    alt: '',
    price: '13 199',
    amountTot: '',
    brand: 'BALENCIAGA',
  },
  {
    name: 'Chuck Taylor 70',
    img: 'public/bild3.jpg',
    alt: '',
    price: '1 968',
    amountTot: '',
    brand: 'CDG X CONVERSE',
  },
  { name: 'Classic Clog', img: 'public/bild4.jpg', alt: '', price: '1399', amountTot: '', brand: 'CROCS' },
  { name: 'Cool Grey', img: 'public/bild5.jpg', alt: '', price: '2199', amountTot: '', brand: 'JORDAN' },
  {
    name: 'Lottery Pack Malachite Green',
    img: 'public/bild6.jpg',
    alt: '',
    price: '1999',
    amountTot: '',
    brand: 'YEEZY',
  },
  {
    name: 'Lottery Pack Malachite Green',
    img: 'public/bild7.jpg',
    alt: '',
    price: '879',
    amountTot: '',
    brand: 'NIKE',
  },
  {
    name: 'Lottery Pack Malachite Green',
    img: 'public/bild8.jpg',
    alt: '',
    price: '1799',
    amountTot: '',
    brand: 'CDG X CONVERSE',
  },
  { name: 'New York Sport', img: 'public/bild9.jpg', alt: '', price: '1599', amountTot: '', brand: 'NEWTON' },
  { name: 'Monster Gorilla', img: 'public/bild10.jpg', alt: '', price: '1299', amountTot: '', brand: 'NIKE' },
  { name: 'SB Dunk Low', img: 'public/bild11.jpg', alt: '', price: '1500', amountTot: '', brand: 'NIKE' },
  {
    name: 'Lottery Pack Malachite Green',
    img: 'public/bild12.jpg',
    alt: '',
    price: '2229',
    amountTot: '',
    brand: 'NIKE',
  },
  { name: 'Platform Boot', img: 'public/bild13.jpg', alt: '', price: '1999', amountTot: '', brand: 'UGGS' },
  { name: 'Light Smoke Grey', img: 'public/bild14.jpg', alt: '', price: '1669', amountTot: '', brand: 'NIKE X JORDAN' },
  { name: 'White Black Panda', img: 'public/bild15.jpg', alt: '', price: '1800', amountTot: '', brand: 'NIKE' },
  { name: 'Team Red', img: 'public/bild16.jpg', alt: '', price: '1999', amountTot: '', brand: 'NIKE' },
];

// Börjar med att direkt generera alla skor som ska visas på första sidan.
// Genom att skapa ett kort för respektive produkt som finns i min shoeContent lista.
const shoeContainer = document.querySelector('.container');
for (let i = 0; i < shoeContent.length; i++) {
  shoeContainer.innerHTML =
    shoeContainer.innerHTML +
    `
    <div class="card" >
        <div class="card-image">
        <img tabindex="0" src="${shoeContent[i].img}"/>
        </div>
        <h2 tabindex="0">${shoeContent[i].brand}</h2>
        <h3 tabindex="0">${shoeContent[i].name}</h3>
        <p tabindex="0">${shoeContent[i].price} kr</p>
    </div>
    `;
}
// Viktiga variabler som används flertal gånger för att nå specifika klasser i HTML koden.
const cardContent = document.querySelectorAll('.card'); // Används för att definera alla kort/produkter/skor
const openContainer = document.querySelector('.openCardContainer'); // Används för att skapa en popUp när man trycker på en sko.
const containerContent = document.querySelector('.cardContainerContent'); // Används för att skriva innehållet i respektive kort.
const addItemToCart = document.querySelector('.addToCart'); // Används för att lägga till produkten/produkterna till varukorgen.
const cartCount = document.querySelector('.lblCartCount'); // Används för att visa antalet produkter i varukorgen.
const openCartMenu = document.querySelector('.openCart'); // Används för att öppna upp varukorgsmenyn
const shoppingContainer = document.querySelector('.shoppingContainer'); // Används för att skapa containern för varukorgsmenyn
const menuOpen = document.querySelector('.menuOpener'); // Används för hamburgarmenyn
const shoppingContent = document.querySelector('.shoppingContainerContent'); // Används för att skriva ut vilka produkter som är i varukorgsmenyn
const scrollTopButton = document.querySelector('.scrollTop'); // Används för att kunna klicka på en knapp för att hamna högst upp på hemsidan.
const checkoutContainer = document.querySelector('.checkoutContainer'); // Används för att skriva ut formuläret som använts för att checka ut.
const shoppingTotalPrice = document.querySelector('.shoppingTotalPrice'); // Används för att ge totalsumma på alla produkter
const allSections = document.querySelectorAll('section'); // Används för att se vart respektive section ligger.
const navLinks = document.querySelectorAll('.nav__links ul li a'); // Används för att att ge nav länkarna klassen Active när man är under specifik section.
const overlay = document.querySelector('.overlay'); // Används för att skapa skugga på sidan när man öppnar popUps.
const numberOfShoes = document.querySelector('.numberOfShoes'); // Används för att titta hur många skor som läggs till i varukorgen
const hamburgerOpen = document.querySelector('.menuOpener'); // Används för att öppna menyn vid tryck av hamburgern.
const hamburgerOpenContainer = document.querySelector('.hamburgerOpenContainer'); // Används för att visa innehållet när man öppnar med hamburgar menyn.
const closeHamburgerContainer = document.querySelector('.closeHamburgerContainer'); // Används för att stänga hamburger menyn
const allHamburgerLi = document.querySelectorAll('.navHamburger ul li'); // Används för att stänga hamburger menyn när man trycker på en Länk
let itemAmount = 0; // Räknar antalet produkter som lagts till i varukorgen
let currentOpenContainer; // Används för att säga vilken produkt som tryckts på.

// Skapar addEventListener för alla kort (Produkt/sko) som skapats. Ifall användaren klickar på ett kort så kommer
// ett fönster komma upp med information om produkten samt ifall man vill köpa skon.
cardContent.forEach(item => {
  item.addEventListener('click', function (e) {
    currentOpenContainer = item;
    containerContent.innerHTML = `
    <h2 tabindex="0">${item.querySelector('h2').innerHTML}</h2>
    <h3 tabindex="0">${item.querySelector('h3').innerHTML}</h3>
    <img tabindex="0" width=150px height=150px src="${item.querySelector('img').src}"/>
    <p tabindex="0">${item.querySelector('p').innerHTML}</p>
    `;
    openContainer.style.display = 'block';
    openContainer.style.animation = 'opencard 0.5s forwards';
    overlay.style.display = 'block';
    overlay.style.animation = 'makeblack 0.5s forwards';
  });
});

//Skapat möjligheten att lägga till flerprodukter samtidigt genom att använda en select med olika alternativ
numberOfShoes.onchange = function (e) {
  let addNewValue =
    parseFloat(currentOpenContainer.querySelector('p').innerHTML.slice(0, -2).replace(/ /g, '')) * numberOfShoes.value;
  containerContent.querySelector('p').innerHTML = `${addNewValue}` + ' kr';
};

//  När man klickar på köp knappen så lägger jag till antalet produkter som valts i option och sparar antalet i shoeContent listan.
// Vid ökning av antalprodukter så lägger jag till ett nummer som visas på kundkorgen genom cartCount.
addItemToCart.addEventListener('click', function (e) {
  itemAmount = 0;
  shoeContent.forEach(item => {
    if (currentOpenContainer.querySelector('h3').innerHTML == item.name) {
      item.amountTot = Number(item.amountTot) + Number(document.querySelector('.numberOfShoes').value);
    }
    itemAmount = Number(item.amountTot) + itemAmount;
  });
  cartCount.style.background = '#ff0000';
  cartCount.innerHTML = itemAmount;
});

//Kopplar så att ifall man tycker på varukorgen så öppnas en meny med allt som lagts till i varukorgen.
openCartMenu.addEventListener('click', function (e) {
  shoppingContainer.style.display = 'flex';
  shoppingContainer.style.animation = 'opencart 0.5s forwards';
  overlay.style.display = 'block';
  overlay.style.animation = 'makeblack 0.5s forwards';
  menuOpen.style.display = 'none';
  shoppingContent.innerHTML = '';
  let totalPrice = 0;
  shoeContent.forEach(item => {
    if (item.amountTot > 0) {
      shoppingContent.innerHTML =
        shoppingContent.innerHTML +
        `
        <div class='cartItem'>
          <img tabindex="0" width=50px height=50px src="${item.img}"/>
          <div class='itemText'>
            <h2 tabindex="0">${item.brand}</h2>
            <h3 tabindex="0">${item.name}</h3>
          </div>
          <p tabindex="0">${Number(item.price.replace(/ /g, '')) * Number(item.amountTot)} kr</p>
          <div class='itemAddRemove'>
            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown();this.parentNode.querySelector('input').dispatchEvent(new Event('change'))" tabindex="0" class="minus"></button>
            <input tabindex="0" class="quantity" min="0" placeholder="0" name="numberOfItems" value="${Number(
              item.amountTot
            )}" type="number">
            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp();this.parentNode.querySelector('input').dispatchEvent(new Event('change'))" tabindex="0" class="plus"></button>
          </div>
        </div>
        <hr>
        `;
      totalPrice = totalPrice + Number(item.price.replace(/ /g, '')) * Number(item.amountTot);
    }
    document.querySelectorAll('.quantity').forEach(item => {
      item.addEventListener('change', updateValue);
    });
  });
  shoppingTotalPrice.innerHTML = 'Total price: ' + totalPrice + ' kr';
});

// Då jag gjorde det möjligt att lägga till och ta bort produkter i menyn så tittar jag ifall det blir någon förändring och
// uppdaterar priset,antalet i respektive produkt och ifall man tar bort produkter och det blir 0 så tas objektet just nu bort från
// varukorgen.
// Använda mig utav replace för att ta bort mjöliga mellanrum som sker ibland när man skrivit priset.
// När man ändrar värdet i shoppingmenyn så uppdateras även antalet på varukorgen.
function updateValue() {
  itemAmount = 0;
  let totalPrice = 0;
  shoeContent.forEach(item => {
    if (item.name == this.closest('.cartItem').children[1].children[1].innerHTML) {
      item.amountTot = this.value;
      this.closest('.cartItem').children[2].innerHTML =
        `${Number(item.price.replace(/ /g, '')) * Number(item.amountTot)}` + 'kr';
      if (item.amountTot == 0) {
        this.closest('.cartItem').style.display = 'none';
      }
    }

    itemAmount = Number(item.amountTot) + itemAmount;
    totalPrice = totalPrice + Number(item.price.replace(/ /g, '')) * Number(item.amountTot);
  });
  if (itemAmount == 0) {
    cartCount.style.background = '';
  } else {
    cartCount.style.background = '#ff0000';
  }
  cartCount.innerHTML = itemAmount;
  shoppingTotalPrice.innerHTML = 'Total price: ' + totalPrice + ' kr';
}

// När man klickar på köp knappen vid shoppingmenyn så kommer man scrollas till formuläret som poppar upp på hemsidan.
document.querySelector('.OpenFormContainer').addEventListener('click', function () {
  checkoutContainer.style.display = 'block';
  checkoutContainer.scrollIntoView();
  shoppingContainer.style.animation = 'closecart 0.5s forwards';
  document.querySelector('.overlay').style.animation = 'makewhite 0.5s forwards';
  menuOpen.style.display = '';
  setTimeout(function () {
    shoppingContainer.style.display = '';
    document.querySelector('.overlay').style.display = '';
  }, 500);
});

// Denna kod används för att göra det möjligt att kunna klicka utanför popupen för att stänga den.
// Detta måste då göras med flertal logiska uttryck. Då väljer jag att titta vart använder klickat och sedan tittar ifall
// det var under popupen eller inte. Ifall klick eventen är på popupen när den visas så kommer inget att hända. Och ifall man
// klickar utanför så kommer popupen stängas.
document.addEventListener('click', function (e) {
  // Denna kod används för att visa/gömma shoppingCartMenu
  if (
    shoppingContainer.style.display === 'flex' &&
    e.target !== shoppingContainer &&
    e.target !== openCartMenu &&
    e.target !== cartCount &&
    e.target !== document.querySelector('.fa') &&
    e.target.closest('.shoppingContainer') !== document.querySelector('.shoppingContainer')
  ) {
    shoppingContainer.style.animation = 'closecart 0.5s forwards';
    document.querySelector('.overlay').style.animation = 'makewhite 0.5s forwards';
    menuOpen.style.display = '';
    setTimeout(function () {
      shoppingContainer.style.display = '';
      document.querySelector('.overlay').style.display = '';
    }, 500);
  }
  // Denna kod används för att visa/gömma ShoeOpenContainer
  if (
    openContainer.style.display === 'block' &&
    e.target.closest('.card') !== openContainer &&
    e.target.closest('.card') !== currentOpenContainer
  ) {
    document.querySelector('.numberOfShoes').value = 1;
    let checkCardClick = 0;
    cardContent.forEach(item => {
      if (e.target.closest('.card') == item) {
        checkCardClick = 1;
      }
    });
    if (checkCardClick == 0) {
      openContainer.style.animation = 'closecard 0.5s forwards';
      document.querySelector('.overlay').style.animation = 'makewhite 0.5s forwards';
      setTimeout(function () {
        openContainer.style.display = '';
        document.querySelector('.overlay').style.display = '';
      }, 500);
    }
  }
});

// Denna del används för att skapa  klick funktioner för hamburgermenyn
hamburgerOpen.addEventListener('click', function (e) {
  hamburgerOpenContainer.style.display = 'block';
});
closeHamburgerContainer.addEventListener('click', function (e) {
  hamburgerOpenContainer.style.display = '';
});
allHamburgerLi.forEach(li => {
  li.addEventListener('click', function (e) {
    hamburgerOpenContainer.style.display = '';
  });
});

// Detta används för att få fram navbaren när man scrollar upp och tar bort den när man scrollar ner.
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && document.body.scrollTop < 50) {
    navbar.style.animation = 'closenav 0.5s forwards';
  } else {
    navbar.style.display = '';
    navbar.style.animation = 'opennav 0.5s forwards';
  }
  lastScrollTop = scrollTop;
});

// This is used for making a scroll button
window.onscroll = function () {
  scrollFunction(); // Tittar ifall användaren scrollat ner lite. Ifall man scrollat ner lite så kommer en knapp göras synlig för att ta en högst upp.
  navMenuChange(); // Används för att titta vilken section man är under vid scroll. Och ger länken i navbaren
  // som sectionen är länkad till en ny klass .active som gör det möjligt att markera objektet i navbaren som användaren har i sin vy.
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
}

function navMenuChange() {
  // Denna del används för att designa a markeringen.
  let current = '';
  allSections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
}

scrollTopButton.addEventListener('click', function (e) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Skapar en validering av formuläret
const submit = document.getElementById('submit');
document.querySelector('.checkOutButton').addEventListener('click', validate);

// Valideringen tittar ifall användaren skrivit något i respektive input. Ifall det är tomt så kommer en rödruta samt text visas
// När användaren skrivit ut allt så kommer submitten att fungera och då har jag valt att preventdefault för att göra det möjligt att
// lägga till javascript animitation istället. Där jag väljer att skapa en popup för att tacka användaren för beställningen.
function validate(e) {
  const formFields = document.querySelectorAll('.nameError');
  let valid = true;
  formFields.forEach(error => {
    if (!error.previousElementSibling.value) {
      valid = false;
      error.classList.add('visible');
      error.previousElementSibling.classList.add('invalid');
      error.setAttribute('aria-hidden', false);
      error.setAttribute('aria-invalid', true);
    } else {
      error.previousElementSibling.classList.remove('invalid');
    }
  });
  if (valid == true) {
    e.preventDefault();
    document.querySelector('.completedOrder').style.display = 'block';
    document.querySelector('.completedOrder').style.animation = 'opencompleteorder 1s forwards';
    setTimeout(function () {
      document.querySelector('.completedOrder').style.display = '';
      document.querySelector('.completedOrder').style.animation = 'closecompleteorder 1s forwards';
    }, 2000);
  }
}
