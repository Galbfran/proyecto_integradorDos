const harryPotter = JSON.parse(localStorage.getItem('librosArray'));


const contenedorHTML = document.getElementById('productos')

const renderizarPersonajes = (harryPotter) => {
    harryPotter.forEach(libros => {
        if (libros.cantidad > 0) {
            contenedorHTML.innerHTML += `
        <div class="producto">
                    <div class="imagenCarrito">
                        <img src=${libros.imagen} alt="taza harry potter">
                    </div>
                    <div class="descripcion">
                        <h5>${libros.titulo}</h5>
                    </div>
                    <div>
                        <h5>$${libros.precio}</h5>
                    </div>
                    <div class="cantidadCarrito">
                        <div class="botonesSumaResta" id="libroResta${libros.libro}">
                            <button>-</button>
                        </div>
                        <h5>cant ${libros.cantidad}</h5>
                        <div class="botonesSumaResta" id="libroSuma${libros.libro}">
                            <button>+</button>
                        </div>
                    </div>
                    <div>
                        <h5>total ${libros.precio * libros.cantidad}</h5>
                    </div>`
        }
    })
}


renderizarPersonajes(harryPotter)

//evento button para agregar cantidad
// primer boton
const modificacionArray = JSON.parse(localStorage.getItem("librosArray"))
console.log(modificacionArray)

const actualizarHTML = (libros) => {
    contenedorHTML.innerHTML = "";
    renderizarPersonajes(libros);
};


//resta
//libro 1
document.getElementById('libroResta1').addEventListener('click', function () {
    modificacionArray[0].cantidad = modificacionArray[0].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//libro 2
document.getElementById('libroResta2').addEventListener('click', function () {
    modificacionArray[1].cantidad = modificacionArray[1].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//libro 3

document.getElementById('libroResta3').addEventListener('click', function () {
    modificacionArray[2].cantidad = modificacionArray[2].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//libro 4

document.getElementById('libroResta4').addEventListener('click', function () {
    modificacionArray[3].cantidad = modificacionArray[3].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//libro 5

document.getElementById('libroResta5').addEventListener('click', function () {
    modificacionArray[4].cantidad = modificacionArray[4].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//libro 6

document.getElementById('libroResta6').addEventListener('click', function () {
    modificacionArray[5].cantidad = modificacionArray[5].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//libro 7

document.getElementById('libroResta7').addEventListener('click', function () {
    modificacionArray[6].cantidad = modificacionArray[6].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//suma
document.getElementById('libroSuma1').addEventListener('click', function () {
    modificacionArray[0].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});


//segundo boton
document.getElementById('libroSuma2').addEventListener('click', function () {
    modificacionArray[1].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//tercer boton
document.getElementById('libroSuma3').addEventListener('click', function () {
    modificacionArray[2].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//cuarto boton
document.getElementById('libroSuma4').addEventListener('click', function () {
    modificacionArray[3].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//quinto boton
document.getElementById('libroSuma5').addEventListener('click', function () {
    modificacionArray[4].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

// sexto boton
document.getElementById('libroSuma6').addEventListener('click', function () {
    modificacionArray[5].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});

//septimo boton

document.getElementById('libroSuma7').addEventListener('click', function () {
    modificacionArray[6].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    actualizarHTML(modificacionArray);
    location.reload();
});