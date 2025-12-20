const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

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

