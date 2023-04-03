import { Request, Response } from "express";
import UserModel from "../models/user.model";

const listUsers = async () => {
    const responseUsers = UserModel.find();
    return responseUsers;
}

const loginUser = async ( {body}:Request ) => {
    const {email, password} = body;
    const verificarUsuario = await UserModel.findOne({email});
    if (!verificarUsuario) return "NOT_FOUND_USER";
    console.log(email);
    console.log(password);
    
}

export {listUsers, loginUser};