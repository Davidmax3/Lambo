const menu = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");
menu.onclick = function(){
   menu.classList.toggle('active');
   navlist.classList.toggle('drop');
}
const dropnow = document.getElementById("about");
dropnow.onclick = function(){
   dropnow.classList.toggle('show');
}

const search = document.getElementById("search");
const input = document.getElementById("input")
search.onclick = function(){
   search.classList.toggle('sho');
   input.classList.toggle('indrop')
}
