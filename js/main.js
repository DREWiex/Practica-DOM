//TODO: por buenas prácticas, declarar siempre el evento que está a continuación (línea 3)

document.addEventListener('DOMContentLoaded',()=>{ // da la instrucción de que no cargue el script hasta que el DOM no esté cargado en su totalidad

    const urlBase = 'assets/'; // parte de la url en común con las dos carpetas de imagen
    const fragment = document.createDocumentFragment(); // se crea el objeto DocumentFragment (colección de elementos del DOM) que va a ser común para todo el documento (ver a partir de la línea 46)

    const pintarBanner=()=>{ // desarrollo de la función que se encargará de "pintar" las fotos de la sección "Bienvenidos"
        const foto = document.querySelector('#foto img.img-fluid'); // capturo el elemento (<div>) que tiene el id="foto" y que, a su vez, contiene un <img> con class="img-fluid" --> esta constante haría referencia al "dónde"
        const arrayFotos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']; // indico directamente el nombre de las imágenes que luego concatenaré cuando le asigne el valor correspondiente al atributo source (src="") –línea 15–
        const arrayAlts = ['Foto 1', 'Foto 2', 'Foto 3', 'Foto 4', 'Foto 5', 'Foto 6', 'Foto 7', 'Foto 8']; // array que utilizaremos tanto para el atributo alt como para title

        const indexBan = Math.floor(Math.random() * arrayFotos.length); // cambio aleatorio de la imagen cada vez que se carga la página 

        foto.src = `${urlBase}banner/${arrayFotos[indexBan]}`; // utilizo la const foto –declarada al principio de la función– para capturar el elemento que quiero y con un punto (.src) indico el atributo (src=""), el cual, en este caso, voy a rellenar tanto con el valor de la const urlBase como con el elemento del arrayFotos[–le asigno la const index (línea 13) para generar el cambio aleatorio de la foto–] para completar la ruta donde se encuentra el archivo de la imagen
        foto.alt = arrayAlts[indexBan]; // (ídem línea 15)
        foto.title = arrayAlts[indexBan]; // (ídem línea 15)

    }//PINTARBANNER

    const pintarRecomendados=()=>{ // desarrollo de la función que se encargará de "pintar" las cards (img, h3, p) de la sección "Recomendados"
        const recomendados = document.querySelector('#recomendados'); // capturo el elemento (<div>) que tiene el id="recomendado"

        //* array multidimensional *//
        const arrayCards = [
            ['viajes-1.jpg', 'Viaje 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!'], 
            ['viajes-2.jpg', 'Viaje 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!'],
            ['viajes-3.jpg', 'Viaje 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!'],
            ['viajes-4.jpg', 'Viaje 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!'],
            ['viajes-5.jpg', 'Viaje 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!'],
            ['viajes-6.jpg', 'Viaje 6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!'],
            ['viajes-7.jpg', 'Viaje 7', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores a molestias est qui harum asperiores magni ut placeat consequuntur, provident error veniam dolore ipsa sunt animi nisi praesentium laborum blanditiis!']
        ]

        const indexRec = Math.floor(Math.random() * arrayCards.length); // cambio aleatorio de la imagen cada vez que se carga la página
        console.log(indexRec); //! funciona, pero no logro asignarlo correctamente

        arrayCards.forEach((item, index)=>{ // el forEach se va a repetir una vez por cada array contenido dentro del array principal ([0]=img,h3,p, [1]=img,h3,p, [2]=img,h3,p)
            while(index < 3){ //* el bucle while me da la opción de crear solo 3 cards aunque el lenght del array sea mayor
                const card = document.createElement('ARTICLE'); // se va a crear un elemento <article> por cada vuelta del forEach
                    card.classList.add('grid-item-2'); // primero indico el elemento (card) seguido de un punto por la propiedad 'classList' y seguido, a su vez, de otro punto y el método 'add', y entre paréntesis indicamos la clase de CSS que queremos asignar a ese elemento en concreto (a <article> en este caso)
                    card.classList.add('border-top-right-bottom');
                const cardImg = document.createElement('IMG');
                    cardImg.src =`${urlBase}viajes/${item[0]}`; // primero indico el elemento (cardImg) seguido de un punto y el atributo (.src) para asignarle el valor correspondiente a través de la concatenación (la const urlBase + viajes/ + la posición [0] del item del array en cada una de sus vueltas)
                    cardImg.setAttribute('alt', item[1]); // otra forma de añadir un atributo al elemento: indico el elemento en cuestión (cardImg) seguido de un punto y el método 'setAttribute', y entre paréntesis indico primero el atributo que quiero agregar ('alt') y segundo, separado por una coma, el valor que le voy a asignar (item[1])
                    cardImg.title = item[1];
                    cardImg.classList.add('img-fluid');
                const cardT = document.createElement('H3');
                    cardT.classList.add('hide-me'); //* creo el atributo class para poder capturar el elemento en el evento
                    cardT.textContent = item[1]; // la propiedad '.textContent' establece el contenido del texto según el valor que le hemos indicado (item[1])
                const cardP = document.createElement('P');
                    cardP.textContent = item[2];

                card.append(cardImg, cardT, cardP); // según el orden indicado, añade los tres elementos hijos (<img> –const cardImg–, <h3> –const cardT–, <p> –const cardP–) dentro del elemento padre (<article> –const card–) una vez por cada vuelta del bucle (forEach)

                fragment.append(card); // a su vez, añado todos los elementos que forman parte de la const card al fragment

                //recomendados.append(card); //* utilizo el fragment en su lugar (línea 56)
                break //? fue lo único que se me ocurrió para romper el bucle
            }
        })

        recomendados.append(fragment); // y una vez el fragment esté "lleno" con todos los elementos que necesito después de completar las vueltas del forEach, añado su contenido en el elemento que capturé en la cons recomendados (línea 22)
        //console.log(fragment); //* si hacemos un console.log de fragment fuera del forEach, veremos que está vacío, pues su contenido ha sido "volcado" en el elemento que hayamos indicado (línea anterior), quedando así disponible para ser utilizado en otra parte del documento

        const eventoCuadro=()=>{
            
            /*
            const tituloCard = document.querySelector('.hide-me'); //! solo me está capturando el primer h3 que contiene la clase 'hide-me'
            const cuadroEscondido = document.querySelector('#escondido');
            
            tituloCard.addEventListener('click', esconderCuadro);

            function esconderCuadro(){
                cuadroEscondido.classList.toggle('aplicar-none');
            }
            */

            const tituloCard = document.getElementsByClassName('hide-me'); //* este método me devuelve un array, por ende, puedo recorrerlo para buscar todos los elementos que contengan dicha clase
            const cuadroEscondido = document.querySelector('#escondido');
            

            for(let i = 0; i < tituloCard.length; i++){
                tituloCard[i].addEventListener('click', esconderCuadro);

            function esconderCuadro(){
                cuadroEscondido.classList.toggle('aplicar-none');
                }
            }
        }//EVENTOCUADRO

        eventoCuadro();
    
    }//PINTARRECOMENDADOS

    const pintarDestinos=()=>{
        const destinos = document.querySelector('#destinos');
        const arrayCiudades = ['Bogotá', 'La Paz', 'Santiago de Chile', 'Caracas', 'Buenos Aires'];

        arrayCiudades.forEach((item)=>{
            const ciudad = document.createElement('OPTION');
            ciudad.value = item;
            ciudad.textContent = item;

            fragment.append(ciudad);

        })

        destinos.append(fragment);

    }//PINTARDESTINOS

    pintarBanner();
    pintarRecomendados();
    pintarDestinos();

}) //LOAD

//** APUNTES EXTRAS **//

//* addEventListener es un método de los objetos del DOM (document --> objeto del DOM). Requiere de dos argumentos: el evento ('DOMContentLoaded') y la función ('()=>{}') (el ejemplo anterior es una función callback, pero también puede ser la invocación de otra función, por ejemplo).

//* Es preferible usar querySelector, ya que va a devolver un objeto y, por ende, podremos utilizar los métodos que tiene asociados; a diferencia de si accedemos directamente al nodo en cuestión ('getElementsByTagName()', entre otros) que nos devuelve un array.

//* Array multidimensional: es una array de arrays.

//* El método .append permite añadir tanto elementos html (objeto nodo) como texto (DOMString), mientras que .appendChild solo permite añadir elementos html (objeto nodo).

//* document.createDocumentFragment(): son Nodos del DOM que nunca forman parte del árbol DOM. El caso de uso más común es crearlo, agregarle elementos y luego agregar dicho fragment al árbol del DOM. En el árbol del DOM, el fragment es remplazado por todos sus hijos.

//* En JavaScript, los nombres de las clases se escriben siempre capitalizadas: mayúsculas la primera letra y el resto en minúsculas.

//* La delegación de eventos consiste en declarar un evento en el contenedor del elemento sobre el que queremos lanzarlo.