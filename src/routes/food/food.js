const {Router} = require ("express");
const { obtenerTodasLasComidas } = require("./routes");

const router = Router ()
router.get ("/", obtenerTodasLasComidas );
module.exports = router