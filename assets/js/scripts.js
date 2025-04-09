// const mobileMenuButton = document.querySelector('[data-id="mobile-menu-button"]');
// const mobileNavMenu = document.querySelector('[data-id="mobile-nav-menu"]');
// const mobileNavLinks = mobileNavMenu.querySelectorAll('a'); // Select all links inside the mobile menu

// function toggleMobileMenu() {
//   console.log("Toggle triggered");
//   mobileMenuButton.classList.toggle('active');
//   mobileNavMenu.classList.toggle('active');
// }

// mobileMenuButton.addEventListener('click', toggleMobileMenu);

// // Close the menu when any nav link is clicked
// mobileNavLinks.forEach(       // loop over each link in the list
//   link => {                   // 'link' is the current item in the loop
//     link.addEventListener(    // add a click event to that link
//       'click',                // event type
//       () => {                 // another arrow function (runs on click)
//         toggleMobileMenu();   // this gets called when the link is clicked
//       }
//     );
//   }
// );


// const menu = document.querySelector('.header-nav-menu');
// const toggleButton = document.querySelector('[data-id="mobile-menu-button"]');

// function toggleMenu() {
//   if (menu.classList.contains('opening')) {
//     // Close it
//     menu.classList.remove('opening');
//     menu.classList.add('closing');
//   } else {
//     // Open it
//     menu.classList.remove('closing');
//     menu.classList.add('opening');
//   }
// }

// toggleButton.addEventListener('click', toggleMenu);



const mobileMenuButton = document.querySelector('[data-id="mobile-menu-button"]');
const mobileNavMenu = document.querySelector('[data-id="mobile-nav-menu"]');
const mobileNavLinks = mobileNavMenu.querySelectorAll('a');

let menuIsOpen = false;

function openMenu() {
  mobileNavMenu.classList.remove('closing');
  mobileNavMenu.classList.add('opening');
  mobileMenuButton.classList.add('active');
  menuIsOpen = true;
}

function closeMenu() {
  mobileNavMenu.classList.remove('opening');
  mobileNavMenu.classList.add('closing');
  mobileMenuButton.classList.remove('active');
  menuIsOpen = false;
}

function toggleMobileMenu() {
  console.log("Toggle triggered");
  if (menuIsOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Toggle on button click
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close when any nav link is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuIsOpen) closeMenu();
  });
});

// Optional: remove `.closing` class after animation ends
mobileNavMenu.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'transform' && mobileNavMenu.classList.contains('closing')) {
    mobileNavMenu.classList.remove('closing');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before attaching the event listener.

  // Get the phone link element by its class name.
  let phoneLink = document.querySelector('.header-icon');

  // Check if the phone link element exists.
  if (phoneLink) {
      // Attach a click event listener to the phone link.
      phoneLink.addEventListener('click', function (event) {
          // Prevent the default behavior of the anchor tag (preventing the navigation).
          event.preventDefault();
          
          // Call the function with the desired phone number.
          callPhoneNumber('+07506866569');
      });
  }
});

function callPhoneNumber(phoneNumber) {
  // Open the phone dialer with the specified phone number.
  window.location.href = 'tel:' + phoneNumber;
}
