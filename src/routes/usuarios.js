const express = require('express');
const router = express.Router();
const userSchema = require("../model/usuario")

//creaete usuario
router.post('/usuarios', (req, res) => {
    const usuario = userSchema(req.body);//retornara el usuario creado
    usuario.save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}))
    
})

router.get('/usuarios', async(req, res) => {
    const usuarios = await userSchema.find();
    res.json(usuarios);
    
})

module.exports = router;