import { Sequelize } from "sequelize";
const db=new Sequelize('proyecto','root','1234',{
dialect:'mariadb',
dialectOptions:{
host:'127.0.0.1',
port:'3306',
timestamps:true,
underscore:false,
pool:{
max:5,
min:0,
acquire:30000,
idle:10000
},
operatorAlies:false
}
});
export default db;