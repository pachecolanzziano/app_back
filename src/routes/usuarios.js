const express = require('express');
const router = express.Router();
const userSchema = require("../model/usuario")

//creaete usuario
router.get('/usuarios/:id', async(req, res) => {
    const { id } = req.params.id;
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
    await userSchema.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
})

router.delete('/usuarios/:id', async(req, res) => {
    await userSchema.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))
})


module.exports = router;