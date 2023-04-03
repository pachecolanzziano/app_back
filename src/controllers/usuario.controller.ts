import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { listUsers, loginUser } from "../services/usuario.service";

const loginCtrl = async ({body}: Request, res: Response) => {
     const {email, password} = body;
     const responseLogin = await loginUser(body)
}

const getUsuers = async(req: Request, res: Response) => {
    try {
        const responseUsers = await listUsers()
        res.send(responseUsers)
      } catch (e) {
        handleHttp(res, "ERROR_GET_USERS", e);
      }    
}

export {loginCtrl, getUsuers};