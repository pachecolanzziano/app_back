import { Router } from "express";
import { readdirSync } from "fs";
// readdirSync return:una matrix de nombres, de los archivos y carpetas contenidas en esa ruta

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

// cargador dinamico de rutas (const rutas,funciona sin la asignacion de la constante )
const rutas = readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`)
    .then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
      })
  }
});

export { router };