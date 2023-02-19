//* Buenas prácticas: declarar siempre el evento que está a continuación

document.addEventListener('DOMContentLoaded',()=>{ // da la instrucción de que no cargue el script hasta que el DOM no esté cargado en su totalidad

    const urlBase = 'assets/'; // parte de la url en común con las dos carpetas de imagen
    const fragment = document.createDocumentFragment(); // crea un fragment (una colección de elementos html) 

    const pintarBanner=()=>{ // desarrollo de la función que se encargará de "pintar" las fotos de la sección "Bienvenidos"
        const foto = document.querySelector('#foto img.img-fluid'); // capturo el elemento (<div>) que tiene el id="foto" y que, a su vez, contiene un <img> con class="img-fluid" --> esta constante haría referencia al "dónde"
        const arrayFotos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']; // indico directamente el nombre de las imágenes que luego concatenaré cuando le asigne el valor correspondiente al atributo source (src="") –línea 15–
        const arrayAlts = ['Foto 1', 'Foto 2', 'Foto 3', 'Foto 4', 'Foto 5', 'Foto 6', 'Foto 7', 'Foto 8']; // array que utilizaremos tanto para el atributo alt como para title

        // const indice = Math.floor(Math.random() * arrayFotos); // cambio aleatorio de la imagen cada vez que se carga la página //! (no funciona)

        foto.src = `${urlBase}banner/${arrayFotos[0]}`; // utilizo la const foto –declarada al principio– para capturar el elemento que quiero y con un punto (.src) indico el atributo (src=""), el cual en este caso voy a rellenar tanto con el valor de la const urlBase como con el parámetro del arrayFotos[] para completar la ruta donde se encuentra la imagen
        foto.alt = arrayAlts[0]; // mismo caso que en la línea anterior, solo que voy a utilizar el parámetro de arrayAlts[] para rellenar el atributo (alt="")
        foto.title = arrayAlts[0];

    }

    const pintarRecomendados=()=>{ // desarrollo de la función que se encargará de "pintar" las cards (img, h3, p) de la sección "Recomendados"
        const recomendados = documento.querySelector('#recomendados'); // capturo el elemento (<div>) que tiene el id="recomendado"

        //* array multidimensional *//
        const arrayCards = [
            ['viajes-1.jpg', 'Viaje 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'], 
            ['viajes-2.jpg', 'Viaje 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'],
            ['viajes-3.jpg', 'Viaje 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.']
        ]

        arrayCards.forEach((item)=>{ // Aquí tengo representados los elementos del arrayCard ([0] = url, [1] = alt, )
            const card = document.createElement('ARTICLE'); // se va a crear un elemento <article> por cada vuelta del bucle (forEach)
                card.classList.add('card'); // la clase de CSS que hayamos elegido para <article>
            const cardImg = document.createElement('IMG');
                cardImg.src=`${urlBase}/viajes/${item[0]}`; // Concateno la const urlBase con una string que complete la url (/viajes/) y la posición 0 del array ("viaje2.jpg")
                cardImg.setAttribute('alt', item[1]); // Añado el atributo 'alt' con el valor del elemento [1] del array que está dentro del arrayCards
                cardImg.classList.add('img-fluid'); // Añado la clase 'img-fluid'
            const cardT = document.createElement('H3');
                cardT.textContent = item[1];
            const cardP = document.createElement('P');
                cardP.textContent = item[2];

            card.append(cardImg, cardT, cardP);

            fragment.append(card);
            // recomendados.append(card); --> Utilizo el fragment en su lugar

        })

        recomendados.append(fragment);

    }

    const pintarDestinos=()=>{

    }

    pintarBanner();
    pintarRecomendados();

}) //LOAD

//* APUNTES EXTRAS *//

//* addEventListener es un método de los objetos del DOM (document --> objeto del DOM). Requiere de dos argumentos: el evento ('DOMContentLoaded') y la función ('()=>{}') (el ejemplo anterior es una función callback, pero también puede ser la invocación de otra función, por ejemplo).

//* Es preferible usar querySelector, ya que va a devolver un objeto y, por ende, podremos utilizar los métodos que tiene asociados, a diferencia de si accedemos directamente al nodo en cuestión ('getElementsByTagName()', entre otros) que nos devuelve un array.

//* Array multidimensional: es una array de arrays.

//? Las clases de JS se empiezan en mayúsculas. Ejemplo: Math.