const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Close menu when clicking/tapping outside it on narrow displays
function closeMenuIfClickedOutside(e) {
  // Only active on small screens
  if (!window.matchMedia('(max-width: 768px)').matches) return

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
    if (window.matchMedia('(max-width: 768px)').matches) {
      navbarLinks.classList.remove('active')
      toggleButton.classList.remove('active')
    }
  }
})