import {DataTypes} from 'sequelize';
import db from '../config/db.js';
const Usuario= db.define('usuario',{
nombre:{
type:DataTypes.STRING,
allowNull:false
},
correo:{
type:DataTypes.STRING,
allowNull:false
},
password:{
type:DataTypes.STRING,
allowNull:false
},
confirmar:DataTypes.BOOLEAN
})
export default Usuario;