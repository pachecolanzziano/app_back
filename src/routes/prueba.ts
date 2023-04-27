import { Request, Response, Router } from "express";
import {loginCtrl, getUsuers} from "../controllers/usuario.controller"
const router = Router();

/** http://localhost:3001/prueba/login [POST] */
router.get('/prueba');

//ToDo: pendiente jwt
// router.get('/listar', );

export { router };