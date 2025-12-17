const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

// Toggle menu on small screens
toggleButton.addEventListener('click', (e) => {
  e.preventDefault() // prevent '#' navigation
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle('active')
})

// Close menu when clicking/tapping outside it on narrow displays
function closeMenuIfClickedOutside(e) {
  // Only active on small screens (matches your CSS breakpoint)
  if (!window.matchMedia('(max-width: 500px)').matches) return

  if (navbarLinks.classList.contains('active')) {
    const target = e.target
    if (!navbarLinks.contains(target) && !toggleButton.contains(target)) {
      navbarLinks.classList.remove('active')
      toggleButton.classList.remove('active')
    }
  }
}

// Use pointerdown to cover mouse/touch/pen events
document.addEventListener('pointerdown', closeMenuIfClickedOutside)
// Also close when a navigation link is clicked
navbarLinks.addEventListener('click', (e) => {
  if (e.target && e.target.matches('a')) {
    // allow normal link navigation, but close menu on small screens
    if (window.matchMedia('(max-width: 500px)').matches) {
      navbarLinks.classList.remove('active')
      toggleButton.classList.remove('active')
    }
  }
})