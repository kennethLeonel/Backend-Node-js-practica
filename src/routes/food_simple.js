const {Router} = require ("express");

// para seguir una estructura basada en servicios este modelo se dejo  en su servicio foodservice 
// const Food = require("../models/Food");

// vamos ahora a utilizar nuestro foodservice
 const Foodservice = require("../services/foodservice");



function food (app){
    const router = Router ()
    const foodServ = new Foodservice()
    app.use("/api/food_simple", router)

    router.get("/",async (req,res)=>{
        // se dejo el await porque el metodo getAll es asincrono

        // para seguir una estructura basada en servicios esta consulta se dejo en su servicio foodservice 
     // const food = await Food.find(); // Busca todos los registros de la base de datos y los devuelve en un arreglo
        
     // utilizar nuestro metodo obtenerTodos de nuestro servicio foodservice
        const food = await foodServ.obtenerTodos();
        return res.status(food.success?200:400).json(food) // devuelve un json con los datos de la base de datos
    });
   //Completar endpoints: getById, create, updateById, deleteById

}
module.exports = food;