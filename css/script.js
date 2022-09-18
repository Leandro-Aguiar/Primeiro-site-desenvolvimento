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