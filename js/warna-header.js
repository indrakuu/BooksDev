const as = document.querySelector('.right-bar');
as.addEventListener("mouseenter",function(){
const dd = document.querySelectorAll('#menu li a i'); 
dd[0].style.color= 'yellow';
dd[1].style.color= 'red';
dd[2].style.color= 'blue';
dd[3].style.color= '#31ff0c';
dd[4].style.color= 'violet';
dd[5].style.color= 'black';
dd[6].style.color= '#00f3ff';
});
as.addEventListener("mouseleave",function(){
const ee = document.querySelectorAll('#menu li a i');
ee[0].style.color= 'white';
ee[1].style.color= 'white';
ee[2].style.color= 'white';
ee[3].style.color= 'white';
ee[4].style.color= 'white';
ee[5].style.color= 'white';
ee[6].style.color= 'white';
});