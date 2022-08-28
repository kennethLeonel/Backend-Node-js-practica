
const express = require('express');


// importar el middleware para el form data
const multer = require('multer');
// importar  las varaibles de entorno mediante la desestructuración
const { port } = require('./config/configuracion');
// importar las rutas de prueba
const flights = require("./src/routes/rutaprueba");
// importar las rutas de food 
const foodRouter = require ("./src/routes/food/food");

// importar food_simple 
const foodSimple = require ("./src/routes/food_simple");
const { connection } = require('./config/dbconexion');

const app = express();

// realizar conexion con la base de datos
connection();


let producto ={
    id : 1, 
    name: 'Producto',
    price: 42
}


arregloProductos = [
    {
    id: 1,
    name: 'Producto1',
    price: 425
    },
    {
        id: 2,
        name: 'Producto2',
        price: 428
        },
        {
            id: 3,
            name: 'Producto3',
            price: 420
       },
        
    
];

//---------- Middleware ----------------------------------
// Middleware json
app.use(express.json())

// Middleware urlencoded
app.use(express.urlencoded (
    {
    extended: true} // se puede usar para enviar archivos y para los formularios
    ));

// utilizar el multer middleware es mas usado para archivos y texto si el formulario quiere archivo
app.use(multer().none());
    
//------------Fin de Middleware -----------------------

// app.use(rutaprueba);

app.use(flights);

// utilizar el router de food
app.use("/api/food", foodRouter);

// utilizar el router de food_simple -> donde se injecta la app para poder usar el router de food_simple
foodSimple(app);



app.get('/', (req, res) => {
    console.log(arregloProductos);
    res.send("<h1>" +arregloProductos[0].id +arregloProductos[0].name + "</h1>");

});

app.post('/crear', (req, res) => {
    console.log(req.body);
    var nombre = req.body.name;
    arregloProductos.push (req.body);
    // res.send (arregloProductos);
    return res.status(201).send(`<h1>Hola, ${nombre}</h1>`)
    // return res.status(201).send('<h1> hola dad,'+nombre +' </h1>') -> forma como lo haría yo
   
});

app.put('/actualizar', (req, res) => {
    console.log(req.body);
    var productoCambio = req.body;
    arregloProductos.forEach(productoBuscar =>{
        if (productoBuscar.id == productoCambio.id) {
            productoBuscar.price = productoCambio.price;
            productoBuscar.name = productoCambio.name;
        }
    })
    res.send (arregloProductos);

});

app.delete('/eliminar', (req, res) => {
    var productoEliminar = req.body;
    var productobuscar = arregloProductos.filter(producto => producto.id !== productoEliminar.id);

    arregloProductos = productobuscar
    res.send (arregloProductos);

});




    



app.listen(port, () => {

    console.log(`Servidor corriendo en el puerto ${port}`);
});