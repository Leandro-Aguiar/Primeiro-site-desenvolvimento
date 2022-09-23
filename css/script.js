const imgs = document.getElementById("img-carrousel");
const img = document.querySelectorAll("#img-carrousel img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;

    }

    imgs.style.transform = `translateX(${-idx * 688}px)`;


}

setInterval(carrossel, 4000);




  const dots = document.getElementsByClassName("dot");
  
  var c1 = document.getElementById('carousel1');
  var c2 = document.getElementById('carousel2');
  var c3 = document.getElementById('carousel3');
  

function promocao1() {
    const c1 = document.getElementById('carousel1');
    
    
       if (c1.style.display === 'none') {
           c1.style.display = 'block';
           c2.style.display = 'none';
           c3.style.display = 'none';
       } else {
           c1.style.display = 'block';
           c2.style.display = 'none';
           c3.style.display = 'none';
       }     
 }

function promocao2() {
    
       if (c2.style.display === 'none') {
           c2.style.display = 'block';
           c1.style.display = 'none';
           c3.style.display = 'none';

       } else {
           c2.style.display = 'block';
           c1.style.display = 'none';
           c3.style.display = 'none';
       }
}

function promocao3() {
    
    if (c3.style.display === 'none') {
        c3.style.display = 'block';
        c1.style.display = 'none';
        c2.style.display = 'none';

    } else {
        c3.style.display = 'block';
        c1.style.display = 'none';
        c2.style.display = 'none';
    }
}

var d1 = document.getElementById('depo1');
var d2 = document.getElementById('depo2');
var d3 = document.getElementById('depo3');
d1.style.display = 'block';
d2.style.display = 'none';
d3.style.display = 'none';




function bote() {
    

    
    if (d1.style.display === 'block') {
        d1.style.display = 'none';
        d3.style.display = 'block';
        return
    } 

    if (d2.style.display === 'block') {
        d2.style.display = 'none';
        d1.style.display = 'block';
        return
    } 

    if (d3.style.display === 'block') {
        d3.style.display = 'none';
        d2.style.display = 'block';
        return
    }
}

function botd() {
    

    
    if (d1.style.display === 'block') {
        d1.style.display = 'none';
        d2.style.display = 'block';
        return
    } 

    if (d2.style.display === 'block') {
        d2.style.display = 'none';
        d3.style.display = 'block';
        return
    } 

    if (d3.style.display === 'block') {
        d3.style.display = 'none';
        d1.style.display = 'block';
        return
    }
}