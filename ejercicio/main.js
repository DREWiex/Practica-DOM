/*
pintarBanner
pintarRecomendados
    div 
    h3
    p 
pintarDestinos
*/

const fotoBanner = document.getElementById("banner");
console.log(fotoBanner);

const primeraTarjeta = document.getElementById("card1");
console.log(primeraTarjeta);

const segundaTarjeta = document.getElementById("card2");
console.log(segundaTarjeta);

const terceraTarjeta = document.getElementById("card3");
console.log(terceraTarjeta);


const arrayFotos = ["./fotos/banner/2.jpg", "./fotos/banner/3.jpg", "./fotos/banner/4.jpg", "./fotos/banner/5.jpg", "./fotos/banner/6.jpg", "./fotos/banner/7.jpg", "./fotos/banner/8.jpg"];

arrayFotos.forEach(function(foto){console.log(foto)});
        
for(let i = 0; i < arrayFotos.length; ++1){
    let fotoRandom = arrayFotos[i];
    console.log(fotoRandom);
}


/*
function pintarBanner(){

}

function pintarRecomendados(){

}

function pintarDestinos(){

}
*/