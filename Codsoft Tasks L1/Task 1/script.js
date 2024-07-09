function closeMenu(event) {
    const menu = document.getElementById("menu");

    menu.classList.remove('active');

}

function toggle() {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menu.classList.toggle('active');
}

function openSearch() {
    const searchBox = document.getElementById("searchBox");
    searchBox.classList.toggle('activeBox');
    
} 
function closeSearch() {
    const searchBox = document.getElementById("searchBox");
    searchBox.classList.remove('activeBox');
} 