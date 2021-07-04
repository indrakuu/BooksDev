const cari = document.querySelectorAll('.sepatua p');
for ( let i = 0; i < cari.length; i++ ){
  const pisahkan = cari[i].innerHTML;
  const jumlahkarakter = 300;
  if ( pisahkan.length > jumlahkarakter) {
  const treadless = pisahkan.substr(0, jumlahkarakter);
  const treadless1 = treadless.substr(0, treadless.lastIndexOf(" ") + 1);
  const readmore = pisahkan.substr(treadless1.length, pisahkan.length);
  cari[i].innerHTML = treadless1;

  const createtombol = document.createElement('button');
  const kata = document.createTextNode('Readmore');
  createtombol.appendChild(kata);
  createtombol.setAttribute('class', 'read-more');
  cari[i].append(createtombol);


  createtombol.onclick = function(){
    if ( this.className.indexOf('read-more') > -1) {
          cari[i].innerHTML = treadless1 + readmore;
           this.innerText = "Readless";
           this.classList.remove('read-more');
          }else {
           cari[i].innerHTML = treadless;
           this.innerText = "Readmore";
           this.classList.add('read-more');
         }
         cari[i].append(this);
         };
}
}

// no cdata cdata club
// media query event handler
if (matchMedia) {
const mq = window.matchMedia("(max-width: 1265px)");
mq.addListener(WidthChange);
WidthChange(mq);
}
// media query change
function WidthChange(mq) {
if (mq.matches) {
const h = document.querySelector('.right-bar');
h.insertAdjacentHTML("afterend", "<div class='header-mobile'><label class='show-menu-btn' for='chk'><i class='fa fa-bars'></i></label><label class='hide-menu-btn' for='chk'><i class='fa fa-times'></i></label><label class='search-menu-btn' for='check'><i class='fa fa-search'></i></label><label class='tutup-menu-btn' for='check'><i class='fa fa-times'></i></label></div>");
const r = document.querySelector('.titlewrapper');
r.insertAdjacentHTML("afterend", "<div id='searchfs'><button class='close' type='button'>x</button><form action='/search' id='search-form' method='get'><input name='q' placeholder='type to search' type='search' value=''/><input name='max-results' type='hidden' value='7'/></form></div>");
// ambil semua element icon
const ambil = document.querySelector('.hide-menu-btn');
const ambil1 = document.querySelector('.show-menu-btn');
const ambil2 = document.querySelector('.search-menu-btn');
const ambil3 = document.querySelector('.tutup-menu-btn');
// hilangkan icon tutup
ambil.style.display = 'none';
ambil3.style.display = 'none';
// menambahkan element p HTML header
ambil1.addEventListener("click",function(){
const l = document.querySelector('#search-box');
l.insertAdjacentHTML("afterend", "<p id='cons'>TERHUBUNG KE BOOKS.DEV</p>");
const divbaru = document.createElement('p');
const tulisanbaru = document.createTextNode("2021@booksdev All right reserved");
divbaru.appendChild(tulisanbaru);
const d1 = document.querySelector('.right-bar');
d1.appendChild(divbaru);
d1.style.left = '0';
ambil1.style.display = 'none';
ambil.style.display = 'block';
});
// even klik close
ambil.addEventListener("click",function(){
const k = document.querySelector('#cons');
k.remove();
const e = document.querySelector('.right-bar p');
e.remove();
ambil.style.display = 'none';
ambil1.style.display = 'block';
const f = document.querySelector('.right-bar');
f.style.left = '-101%';
}); 
// even search
ambil2.addEventListener("click",function(){
const w = document.querySelector('#searchfs');
w.classList.add('open');
}); 
  
const buttons = document.querySelector('.close');
buttons.addEventListener("click",function(){
const y = document.querySelector('#searchfs');
if (y !== null) {
	y.classList.remove('open');
}
});
  
} else {
const g = document.querySelector('.header-mobile');
if (g !== null) {
	g.remove();
}
  const t = document.querySelector('#searchfs');
if (t !== null) {
	t.remove();
}
  const a = document.querySelector('.right-bar');
  a.style.left = '-101%';
  const m = document.querySelector('#cons');
  if (m !== null) {
	m.remove();
}
  const z = document.querySelector('.right-bar p');
   if (z !== null) {
	z.remove();
}
}
}
