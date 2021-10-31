const imgs = [
  { src: "./images/image-product-1.jpg", id: 1 },
  { src: "./images/image-product-2.jpg", id: 2 },
  { src: "./images/image-product-3.jpg", id: 3 },
  { src: "./images/image-product-4.jpg", id: 4 },
];

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", ready)
  : ready();

function ready() {
  const profile = document.querySelector("#profile");
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  const addBtn = document.querySelector("#add");
  const removeBtn = document.querySelector("#remove");
  const purchaseBtn = document.querySelector("#purchase");
  // Get the modal
  const modal = document.getElementById("myModal");
  const slides = document.querySelectorAll(".mySlides");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  const img = document.getElementById("myImg");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  profile.addEventListener("mouseover", showCart);

  burger.addEventListener("click", e => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("block");
    } else {
      menu.classList.add("hidden");
    }
  });

  addBtn.addEventListener("click", addItem);
  removeBtn.addEventListener("click", removeItem);
  purchaseBtn.addEventListener("click", purchaseItems);
  img.onclick = function () {
    modal.style.display = "block";
  };
  slides.forEach(slide => {
    slide.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  console.log(slides);
}

function openNav() {
  menu.style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  menu.style.width = "0";
}

function showCart(e) {
  const card = document.querySelector("#card");
  let total = 0;
  const quantityElement = document.querySelector("#quantity");
  const priceElement = document.querySelector("#price");
  const quantity = parseInt(quantityElement.innerText);
  const price = parseFloat(priceElement.innerText.replace("$", ""));
  total = quantity * price;
  if (quantity === 0) {
    card.innerHTML = `<div class="bg-white md:w-72 w-[95%] md:mx-0 z-10 absolute md:right-[125px] right-[2.5%] md:top-[80px] top-[85px] border rounded-md shadow-lg">
    <p class="text-left p-4 border-b-[1px] font-bold">Cart</p>
    <div class="p-12 flex items-center justify-center">
     <p class="text-black text-sm">Your cart is empty</p>
    </div>
  </div>`;
  } else {
    card.innerHTML = `<div class="bg-white md:w-72 w-[95%] md:mx-0 z-10 absolute md:right-[125px] right-[2.5%] md:top-[80px] top-[85px] border rounded-md shadow-lg">
  <p class="text-left p-4 border-b-[1px] font-bold">Cart</p>
  <div class="p-3">
    <img src="./images/image-product-1-thumbnail.jpg" alt=""
      class="rounded-md float-left inline-block mr-3 w-10 h-10">
    <div class="flex justify-between items-center">
      <div class="text-xs flex flex-col">
        <p class="text-[color:var(--dark-grayish-blue)] pb-1">Fall Limited Edition Sneakers</p>
        <p class="text-[color:var(--dark-grayish-blue)] pt-1">${priceElement.firstChild.textContent} x ${quantity} <span class="font-bold">$${total}</span></p>
      </div>
      <button type="button"><img src="./images/icon-delete.svg" /></button>
    </div>
    <button class="bg-[color:var(--orange)] hover:opacity-75 text-white rounded-md align-middle w-full py-2.5 text-center text-sm mt-3"
      type="button">
      Checkout
    </button>
  </div>
</div>`;
  }

  setTimeout(function () {
    card.innerHTML = "";
  }, 5000);
}

function addItem(e) {
  const quantity = document.querySelector("#quantity");
  quantity.innerText = parseInt(quantity.innerText) + 1;
}
function removeItem(e) {
  const quantity = document.querySelector("#quantity");
  quantity.innerText = parseInt(quantity.innerText) - 1;
  if (parseInt(quantity.innerText) < 0) {
    quantity.innerText = 0;
  }
}
function purchaseItems(e) {
  let total = 0;
  const quantityElement = document.querySelector("#quantity");
  const priceElement = document.querySelector("#price");
  const quantity = parseInt(quantityElement.innerText);
  const price = parseFloat(priceElement.innerText.replace("$", ""));
  total = quantity * price;
  console.log(total);
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
    //slides[i].src = imgs[slideIndex].src;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].src = imgs[i].src;
  }

  slides[slideIndex - 1].style.display = "block";
}
