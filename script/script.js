const harryPotter = [
    {
        titulo: "Harry Potter y la Piedra Filosofal",
        libro: "1",
        imagen: "https://contentv2.tap-commerce.com/cover/medium/9789878000107_1.jpg?id_com=1113",
        precio: 1500,
        "descripcion": "Harry Potter crece en la casa de sus tíos, los Dursley, quienes le ocultan su verdadera historia familiar; al cumplir Harry once años de edad, empiezan a llegarle cartas de remitente desconocido, que van aumentando en número a medida que sus tíos no dejan que las abra. Las mismas traen la noticia de que el niño ha sido admitido en el Colegio Hogwarts de Magia y Hechicería, ya que, al igual que sus padres, es mago.",
        cantidad: 0
    },
    {
        titulo: "Harry Potter y la Cámara Secreta",
        libro: "2",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFs7Ykgf8Z-5xQs-z3QkSMHJ0lFSv7hh3aOaVz5KeiOi7z-9Tn0BeFJd1r1DwMyk26VQ&usqp=CAU",
        precio: 1600,
        descripcion: "Tras el primer curso de Harry en Hogwarts, este regresa al hogar de sus tíos Vernon y Petunia Dursley para pasar el verano allí. Un día, en la habitación de Harry aparece un ser conocido como «elfo doméstico» llamado Dobby, quien le advierte que no debe asistir a su segundo curso del colegio puesto que «estará en peligro mortal»; sin embargo, Harry hace caso omiso a las palabras del elfo. Después de esto, Ron Weasley, y sus hermanos Fred y George llegan a su casa en un coche volador, escapando con Harry.",
        cantidad: 0
    },
    {
        titulo: "Harry Pottr y el Prisionero de Azkaban ",
        libro: "3",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YY9wfO8npCoValTRKOgB1r0nIts_G83HsQ&usqp=CAU",
        precio: 1700,
        descripcion: "El verano se acerca a su fin y encuentra a Harry Potter de 13 años en la casa de sus tíos, los Dursley. Pero luego de un incidente en que el muchacho no logra controlar su temperamento y hechiza a una visitante Marge, la hermana de Vernon Dursley, el muchacho huye a bordo del Autobús Noctámbulo rumbo a Londres. Así se entera de la noticia que mantiene en vilo al mundo mágico: un peligroso asesino ha burlado a los carceleros de Azkaban y se ha dado a la fuga.",
        cantidad: 0
    },
    {
        titulo: "Harry Potter y el Cáliz de Fuego",
        libro: "4",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7vnbI2nlqwJlkvXqeUX0gjY50znOkYivFA&usqp=CAU",
        precio: 1700,
        descripcion: "El libro comienza cuando Harry Potter sueña con Frank Bryce, el antiguo jardinero de la mansión de la familia Riddle, quien es descubierto cuando oía una conversación entre un deformado lord Voldemort y su sirviente, Peter Pettigrew. En el sueño de Harry, Voldemort asesina a Bryce. Más tarde, durante el verano, Harry, Hermione Granger y la familia Weasley viajan a presenciar la Copa Mundial de Quidditch. Allí, los mortífagos, los vasallos de Voldemort, aterrorizan a todos, capturan una familia de muggles y huyen cuando ven la Marca Tenebrosa en el cielo.",
        cantidad: 0
    },
    {
        titulo: "Harry Potter y la Orden del Fénix",
        libro: "5",
        precio: 1600,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPxUJQAIzd_zjRyT0Vrlf6gA_P3TjggAqXg&usqp=CAU",
        descripcion: "Harry es escoltado a Londres por la Orden del Fénix, una organización liderada por Dumbledore, que se encarga de combatir a los mortífagos en secreto. El muchacho pasa a vivir en el número 12 de Grimmauld Place, una casa que funciona como centro de operaciones de la Orden y que es propiedad de su padrino Sirius Black. En la residencia se reencuentra con sus amigos Hermione Granger y Ron Weasley, al igual que con el resto de la familia de este último.",
        cantidad: 0
    },
    {
        titulo: "Harry Potter y el Misterio del Príncipe",
        libro: "6",
        imagen: "https://contentv2.tap-commerce.com/cover/large/9789878000152_1.jpg?id_com=1113",
        precio: 1700,
        descripcion: "Cuando Harry y sus amigos Ron y Hermione van al callejón Diagon para comprar materiales escolares, observan a Draco Malfoy encaminarse a Borgin y Burkes, una tienda proveedora de elementos relacionados con las artes oscuras. Ante esto y disimuladamente, los tres protagonistas le siguen los pasos y se percatan de que Draco le insiste al propietario del establecimiento para que arregle un objeto desconocido. Inmediatamente, Harry sospecha de él, catalogándolo como mortífago.",
        cantidad: 0
    },
    {
        titulo: "Harry Potter y las Reliquias de la Muerte",
        libro: "7",
        imagen: "https://contentv2.tap-commerce.com/cover/medium/9789878000169_1.jpg?id_com=1113",
        precio: 1800,
        descripcion: "Harry Potter y las reliquias de la Muerte (título original en inglés, Harry Potter and the Deathly Hallows), es el séptimo libro de la serie literaria Harry Potter, escrita por la autora británica J. K. Rowling. El libro se publicó el 21 de julio de 2007.",
        cantidad: 0
    }
]

//subir array a localstorage

const nombre = localStorage.getItem('librosArray');
if (nombre === null) {
   const miArrayJSON = JSON.stringify(harryPotter);
localStorage.setItem('librosArray', miArrayJSON); ;
} 



// crear cartas en html
const contenedorHTML = document.getElementById('cartas')
const inputHTML = document.getElementById("inputHTML")


const renderizarPersonajes = (harryPotter) => {
    harryPotter.forEach(libros => {
        contenedorHTML.innerHTML += `
            <div class="carta">
            <div class="imagenProducto">
                <img src=${libros.imagen}>
            </div>
            <div class="cartaTexto">
                <h3>${libros.titulo}</h3>
                <p>${libros.descripcion}</p>
                <h3>$${libros.precio}</h3>
            </div>
            <div class="boton" id="libro-${libros.libro}">
                <button>Agregar a Carrito <i class="bi bi-cart4"></i></button>
            </div>
        </div>`
    })
}


renderizarPersonajes(harryPotter)

//evento button para agregar cantidad
// primer boton
const modificacionArray = JSON.parse(localStorage.getItem("librosArray"))
console.log(modificacionArray)
document.getElementById('libro-1').addEventListener('click', function () {
    modificacionArray[0].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[0].titulo +" al carrito ")
});


//segundo boton
document.getElementById('libro-2').addEventListener('click', function () {
    modificacionArray[1].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[1].titulo +" al carrito ")
});

//tercer boton
document.getElementById('libro-3').addEventListener('click', function () {
    modificacionArray[2].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[2].titulo +" al carrito ")
});

//cuarto boton
document.getElementById('libro-4').addEventListener('click', function () {
    modificacionArray[3].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[3].titulo +" al carrito ")
});

//quinto boton
document.getElementById('libro-5').addEventListener('click', function () {
    modificacionArray[4].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[4].titulo +" al carrito ")
});

// sexto boton
document.getElementById('libro-6').addEventListener('click', function () {
    modificacionArray[5].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[5].titulo +" al carrito ")
});

//septimo boton

document.getElementById('libro-7').addEventListener('click', function () {
    modificacionArray[6].cantidad += 1;
    localStorage.setItem('librosArray', JSON.stringify(modificacionArray));
    alert("Se a agregado "+ modificacionArray[6].titulo +" al carrito ")
});