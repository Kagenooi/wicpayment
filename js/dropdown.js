let dropdown = document.querySelectorAll('.dropdown');

function openDropdown(dropdown__active) {
    document.querySelector(`#${dropdown__active}`).classList.toggle('active');
}