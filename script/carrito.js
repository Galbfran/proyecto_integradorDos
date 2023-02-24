const harryPotter = JSON.parse(localStorage.getItem('librosArray'));


const contenedorHTML = document.getElementById('productos')

const renderizarPersonajes = (harryPotter ) =>{
    harryPotter.forEach(libros => {
        if(libros.cantidad > 0){
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
                        <button  id="libroResta${libros.libro}">-</button>
                        <h5>cant ${libros.cantidad}</h5>
                        <button  id="libroSuma${libros.libro}">+</button>
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
document.getElementById('libroResta1').addEventListener('click', function () {
    modificacionArray[0].cantidad = modificacionArray[0].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});


//segundo boton
document.getElementById('libroResta2').addEventListener('click', function () {
    modificacionArray[1].cantidad = modificacionArray[1].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//tercer boton
document.getElementById('libroResta3').addEventListener('click', function () {
    modificacionArray[2].cantidad = modificacionArray[2].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//cuarto boton
document.getElementById('libroResta4').addEventListener('click', function () {
    modificacionArray[3].cantidad = modificacionArray[3].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//quinto boton
document.getElementById('libroResta5').addEventListener('click', function () {
    modificacionArray[4].cantidad = modificacionArray[4].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));

});

// sexto boton
document.getElementById('libroResta6').addEventListener('click', function () {
    modificacionArray[5].cantidad = modificacionArray[5].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//septimo boton

document.getElementById('libroResta7').addEventListener('click', function () {
    modificacionArray[6].cantidad = modificacionArray[6].cantidad - 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});


//suma
document.getElementById('libroSuma1').addEventListener('click', function () {
    modificacionArray[0].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[0].titulo +" al carrito ")
});


//segundo boton
document.getElementById('libroSuma2').addEventListener('click', function () {
    modificacionArray[1].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//tercer boton
document.getElementById('libroSuma3').addEventListener('click', function () {
    modificacionArray[2].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//cuarto boton
document.getElementById('libroSuma4').addEventListener('click', function () {
    modificacionArray[3].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//quinto boton
document.getElementById('libroSuma5').addEventListener('click', function () {
    modificacionArray[4].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

// sexto boton
document.getElementById('libro-6').addEventListener('click', function () {
    modificacionArray[5].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});

//septimo boton

document.getElementById('libroSuma7').addEventListener('click', function () {
    modificacionArray[6].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
});