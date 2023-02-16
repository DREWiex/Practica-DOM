//! Las --> clases <-- de JS se empiezan en mayúsculas. Ejemplo: Math.

document.addEventListener('DOMContentLoaded',()=>{

    const urlBase = 'assets/banner'; // parte de la url en común con las dos carpetas de imagen
    const fragment = document.createDocumentFragment();

    const pintarBanner=()=>{
        const foto = document.querySelector('#foto img.imgFluid'); // Capturo un <div> con id="foto" que contiene un <img> con clase="imgFluid"
        const arrayFotos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        const arrayAlts = ['foto 1', 'foto 2', 'foto 3', 'foto 4'];

        const indice = Math.floor(Math.random() * arrayFotos)

        foto.src = `${urlBase}/banner/${arrayFotos[0]}`; // id="foto" y atributo "src=''" del elemento hijo (img)
        foto.alt=arrayAlts[0];

    }

    const pintarRecomendados=()=>{
        const recomendados = documento.querySelector('#recomendados'); // Capturo el elemento con id="recomendado"

        const arrayCards = [
            ["viajes-1.jpg", "Viaje 1", "Lorem ipsum dolor sit amet, consectetur adipisicing elit."],["viajes-2.jpg", "Viaje 2", "Lorem ipsum dolor sit amet, consectetur adipisicing elit."], ["viajes-3.jpg", "Viaje 3", "Lorem ipsum dolor sit amet, consectetur adipisicing elit."]
        ]

        arrayCards.forEach((item)=>{ // Aquí tengo representados los elementos del arrayCard ([0] = url, [1] = alt, )
            const card = document.createElement('ARTICLE');
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

})//LOAD