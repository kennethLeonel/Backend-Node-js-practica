const {mongoose} = require('../../config/dbconexion');

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number
});
// los modelos por ley va en mayuscula
const Food = mongoose.model('Food', foodSchema);

// exportamos nuestro modelo para poder usarlo en otros archivos
module.exports = Food;