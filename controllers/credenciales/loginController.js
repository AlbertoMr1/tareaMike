import Usuario from '../../models/Usuario.js'
const credenciales=(req,res)=>{
res.render('credenciales/login',{
pagina:"Alta Credenciales"
});
}
const registrando=async(req,res)=>{
const usuario=await Usuario.create(req.body);
res.json(usuario);
}
export {
credenciales,
registrando
}