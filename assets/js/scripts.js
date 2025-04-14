// ------------------------------
// Mobile Navigation Menu Toggle
// ------------------------------

// Select the mobile menu button and nav menu container using custom data attributes
const mobileMenuButton = document.querySelector('[data-id="mobile-menu-button"]');
const mobileNavMenu = document.querySelector('[data-id="mobile-nav-menu"]');
const mobileNavLinks = mobileNavMenu.querySelectorAll('a'); 
// Get all <a> tags (nav links) inside the mobile menu
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

// Track menu state (open or closed)
let menuIsOpen = false;

/**
 * Open the mobile menu:
 * - Removes 'closing' class to cancel any closing animation
 * - Adds 'opening' class to trigger the open animation
 * - Adds 'active' class to the button for styling (e.g., hamburger → cross)
 */
function openMenu() {
  mobileNavMenu.classList.remove('closing');
  mobileNavMenu.classList.add('opening');
  mobileMenuButton.classList.add('active');
  mobileNavOverlay.classList.add('active');
  menuIsOpen = true;
}

/**
 * Close the mobile menu:
 * - Removes 'opening' class
 * - Adds 'closing' class to trigger the close animation
 * - Removes 'active' styling from the toggle button
 */
function closeMenu() {
  mobileNavMenu.classList.remove('opening');
  mobileNavMenu.classList.add('closing');
  mobileMenuButton.classList.remove('active');
  mobileNavOverlay.classList.remove('active');
  menuIsOpen = false;
}

/**
 * Toggle mobile menu open or closed
 */
function toggleMobileMenu() {
  console.log("Toggle triggered");
  menuIsOpen ? closeMenu() : openMenu();
}

// Click outside the nav to close it (overlay click)
mobileNavOverlay.addEventListener('click', closeMenu); 

// Attach toggle event to mobile menu button
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close mobile menu when any link inside it is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuIsOpen) closeMenu();
  });
});

// Remove 'closing' class after the animation ends to reset state
mobileNavMenu.addEventListener('transitionend', (e) => {
  // Only run when the transform property (slide effect) finishes
  if (e.propertyName === 'transform' && mobileNavMenu.classList.contains('closing')) {
    mobileNavMenu.classList.remove('closing');
  }
});


// ------------------------------
// Phone Link (Click to Call)
// ------------------------------

/**
 * Wait for the entire DOM to be ready before running this script
 */
document.addEventListener('DOMContentLoaded', function () {
  // Select the clickable phone icon or link by class
  const phoneLink = document.querySelector('.header-icon');
  const touchCTA = document.getElementById('touch');

  // If the element exists, attach a click event to trigger phone call
  if (phoneLink) {
    phoneLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior (navigation)

      // Trigger the call with the provided phone number
      callPhoneNumber('+07506866569');
    });
  }
  if (touchCTA) {
    touchCTA.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior (navigation)

      // Trigger the call with the provided phone number
      callPhoneNumber('+07506866569');
    });
  }
});

/**
 * Opens the default phone dialer with the given phone number.
 * Works on mobile devices only.
 */
function callPhoneNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}
