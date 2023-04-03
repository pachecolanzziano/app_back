import { Request, Response, Router } from "express";
import {loginCtrl, getUsuers} from "../controllers/usuario.controller"
const router = Router();

/** http://localhost:3001/usuario/login [POST] */
router.post('/login', loginCtrl );//

//ToDo: pendiente jwt
router.get('/listar',getUsuers );

export { router };