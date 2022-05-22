let links = document.querySelectorAll('.nav-link');
let separators = document.querySelectorAll('#drop_separator');

function updateActiveLink() {
	manageActiveLink(links);
}

function manageActiveLink(navLinks) {
    navLinks.forEach((link) => {
		let currentSection = document.querySelector(link.hash);
		let sectionSize = currentSection.offsetTop + currentSection.offsetHeight;
		let dividerSize = 200;
		if (currentSection.offsetTop <= window.scrollY + dividerSize && sectionSize > window.scrollY) {
            link.parentNode.classList.add('nav-active');
		} else {
            link.parentNode.classList.remove('nav-active');
		}
	});
}

function displayMenu() {
    let open = document.getElementById('drop-open');
    let close = document.getElementById('drop-close');
    let dropLinks = document.querySelectorAll('.dropdown-link');

    open.style.display = 'none';
    close.style.display = 'block';
    dropLinks.forEach(link => {
        link.style.display = 'flex';
    });
    separators.forEach(separator => {
        separator.style.display = 'block';
    });
}

function hideMenu() {
    let open = document.getElementById('drop-open');
    let close = document.getElementById('drop-close');
    let dropLinks = document.querySelectorAll('.dropdown-link');

    close.style.display = 'none';
    open.style.display = 'block';
    dropLinks.forEach(link => {
        link.style.display = 'none';
    });
    separators.forEach(separator => {
        separator.style.display = 'none';
    });
}

window.addEventListener('scroll', updateActiveLink);
