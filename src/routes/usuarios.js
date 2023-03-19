const express = require('express');
const router = express.Router();
const userSchema = require("../model/usuario")

//creaete usuario
router.get('/usuarios/:id', async(req, res) => {
    const { id } = req.params;
    const usuario = await userSchema.findById(id);
    res.json(usuario);
})

router.get('/usuarios', async(req, res) => {
    const usuarios = await userSchema.find();
    res.json(usuarios);
})

router.post('/usuarios', (req, res) => {
    const usuario = userSchema(req.body);//retornara el usuario creado
    usuario.save()
        .then((data) => res.json(data))
        .catch((error)=> res.json({message: error}))
})

router.put('/usuarios/:id', async(req, res) => {
    const { id } = req.params;
    const { nombre, apellido, telefono, email, img} = req.body;
    await userSchema.updateOne({ _id:id }, {$set: {nombre, apellido, telefono, email, img}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
})

router.delete('/usuarios/:id', async(req, res) => {
    const { id } = req.params;
    await userSchema
    .findByIdAndRemove({ _id: id })
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
})


module.exports = router;