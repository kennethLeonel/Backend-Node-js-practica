const obtenerTodasLasComidas = (req, res) => {
    return res.json({ "name": "food",
                      "price" : 100                  
            });

};

module.exports = {obtenerTodasLasComidas};