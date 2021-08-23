const hamburger = document.querySelector(
	'.header .nav-bar .nav-list .hamburger'
)
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const header = document.querySelector('.header.container')
const faqs = document.querySelectorAll('.faq')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	mobile_menu.classList.toggle('active')
})

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY
	if (scroll_position > 250) {
		header.style.backgroundColor = '#262626'
	} else {
		header.style.backgroundColor = ' transparent'
	}
})

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('active')
	})
})
