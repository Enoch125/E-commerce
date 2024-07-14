// const carousel = document.querySelector('.carousel');
// const images = carousel.querySelectorAll('img');
// let currentIndex = 0;

// carousel.querySelector('.prev').addEventListener('click', () => {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = images.length - 1; 
//     } 
//     updateCarousel(); 
//   });
  
//   carousel.querySelector('.next').addEventListener('click', () => { 
//   currentIndex++; 
//   if (currentIndex > images.length - 1) {
//    currentIndex = 0; 
//   } 
//     updateCarousel(); 
//   });
//   function updateCarousel() {
//     images.forEach((image, index) => {
//       if (index === currentIndex) {
//         image.style.display = 'block';
//       } else {
//         image.style.display = 'none';
//       }
//     });
//   }

// let currentIndex = 0;
// let cart = [];

// function showSlide(index) {
//     const track = document.querySelector('.carousel-track');
//     const items = document.querySelectorAll('.item');
//     const itemsToShow = 4;
//     const totalItems = items.length;
//     const maxIndex = Math.ceil(totalItems / itemsToShow) - 1;
    
//     if (index < 0) {
//         currentIndex = 0;
//     } else if (index > maxIndex) {
//         currentIndex = maxIndex;
//     } else {
//         currentIndex = index;
//     }

//     const newTransform = -(currentIndex * 100) + '%';
//     track.style.transform = `translateX(${newTransform})`;
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// function addToCart(productId) {
//     const product = document.querySelector(`.item[data-product-id="${productId}"] p`).innerText;
//     console.log('Adding to cart:', productId, product);
//     cart.push(product);
//     updateCart();
//     updateCartCount();
// }

// function updateCart() {
//     const cartItems = document.getElementById('cart-items');
//     cartItems.innerHTML = '';
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.innerText = item;
//         cartItems.appendChild(li);
//         console.log('Cart updated:', cart); 
//     });
// }

// function updateCartCount() {
//     const cartCount = document.getElementById('cart-count');
//     cartCount.innerText = cart.length;
//     console.log('Cart count updated:', cart.length);
// }

// showSlide(currentIndex);


let cart = [];
let currentIndices = [0, 0]; // Store current indices for multiple carousels

function showSlide(index, carouselIndex) {
    const track = document.getElementById(`carousel-track-${carouselIndex}`);
    const items = track.querySelectorAll('.item');
    const itemsToShow = 4;
    const totalItems = items.length;
    const maxIndex = Math.ceil(totalItems / itemsToShow) - 1;
    
    if (index < 0) {
        currentIndices[carouselIndex] = 0;
    } else if (index > maxIndex) {
        currentIndices[carouselIndex] = maxIndex;
    } else {
        currentIndices[carouselIndex] = index;
    }

    const newTransform = -(currentIndices[carouselIndex] * 100) + '%';
    track.style.transform = `translateX(${newTransform})`;
}

function nextSlide(carouselIndex) {
    
    showSlide(currentIndices[carouselIndex] + 1, carouselIndex);
}

function prevSlide(carouselIndex) {
 
    showSlide(currentIndices[carouselIndex] - 1, carouselIndex);
}

function addToCart(productId) {
    const productElement = document.querySelector(`.item[data-product-id="${productId}"]`);
    const product = {
        id: productId,
        name: productElement.querySelector('.content-name p').innerText,
        price: productElement.querySelector('.content-prices p').innerText,
        image: productElement.querySelector('img').src
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
    currentIndices.forEach((_, index) => showSlide(0, index));
    updateCartCount();
});



let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showReview(index) {
    const carouselContainer = document.querySelector('.carousel-container1');
    const newTransform = -(index * 100) + '%';
    carouselContainer.style.transform = `translateX(${newTransform})`;
}

function nextReview1() {
    currentReview = (currentReview + 1) % totalReviews;
    showReview(currentReview);
}

function prevReview1() {
    currentReview = (currentReview - 1 + totalReviews) % totalReviews;
    showReview(currentReview);
}

// Show the first review initially
showReview(currentReview);

