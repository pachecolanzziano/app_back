import { Request, Response } from "express";
import UserModel from "../models/user.model";

const listUsers = async () => {
    const responseUsers = UserModel.find();
    return responseUsers;
}

const loginUser = async ( {email, password}) => {
    const userCheckIs = await UserModel.findOne({email});
    if (!userCheckIs) return "NOT_FOUND_USER";

    const passwordHash = userCheckIs.password;
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECT";
    const token = generateToken(userCheckIs.email);
    const data = {
        user : userCheckIs,
    };
    return data;
}

export {listUsers, loginUser};