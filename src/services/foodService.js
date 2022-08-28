const Food = require("../models/Food");

class FoodService {
   async obtenerTodos() {
        try {
            const food = await Food.find(); // Busca todos los registros de la base de datos y los devuelve en un arreglo
            return {
                status: 200,
                success: true,
                data: food,
                message: "Foods obtenidos correctamente"
            }
        } catch (error) {
            console.log(error);
            return{
                message: "Error al obtener items food",
                success: false
            }
        }


        const food = await Food.find(); // Busca todos los registros de la base de datos y los devuelve en un arreglo
    }
}

module.exports = FoodService;