import express from "express";
import {credenciales,registrando} from "../controllers/credenciales/loginController.js"
const routerCredenciales=express.Router();
//Routing
//para la vista alta credenciales
routerCredenciales.get('/credenciales',credenciales);
routerCredenciales.post('/registrar',registrando);
export default routerCredenciales