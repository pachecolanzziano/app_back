import { Schema, Types, model, Model } from "mongoose";

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = model("usuarios", UserSchema);
export default UserModel;
