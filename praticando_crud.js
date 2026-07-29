const express = require("express");
const app = express();
app.use(express.json());

let usuarios = []

// Listar Usuarios
app.get("/usuarios",(req,res) => {
    if(usuarios.length === 0){
        return res.status(404).send({message:"Nenhum usuarios no Banco"})
    }
    return res.status(200).json(usuarios);
})

// Listar um Usuario
app.get("/Usuarios/:id",(req,res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(item => item.id === id);
    if(!usuario){
        return res.status(404).send({message:"Usuario não encontrado!"})
    }
    return res.status(200).json(usuario)

    
})

// Criar usuario
app.post("/usuarios",(req,res) => {
    const {nome,sobrenome,idade} = req.body;
    let id;
    if(usuarios.length > 0){
        id = usuarios[usuarios.length - 1].id + 1;
    }
    else{
        id = 1;
    } 
    const novoUsuario = {id,nome,sobrenome,idade}
    usuarios.push(novoUsuario);
    return res.status(201).json(novoUsuario)
})

// Atualizar usuario
app.put("/usuarios/:id",(req,res) => {
    let id = parseInt(req.params.id);
    const {nome,sobrenome,idade} = req.body
    const usuario = usuarios.find(item => item.id === id)
    if(!usuario){
        return res.status(404).send({message:"Usuario não existe!"})
    }
    usuario.nome = nome|| usuario.nome 
    usuario.sobrenome = sobrenome|| usuario.sobrenome 
    usuario.idade = idade|| usuario.idade 
    return res.status(200).send(usuario)
})


// Deletar usuario

app.delete("/usuarios/:id",(req,res) => {
    let id = parseInt(req.params.id);
    const usuario = usuarios.find(item => item.id === id)
    if(!usuario){
       return res.status(404).send({message:"Usuario não existe!"})
    }
    usuarios = usuarios.filter(item => item.id !== id)
    return res.status(200).send({message:"Usuario "+usuario.nome+" deletado com sucesso!"})
})

app.listen(3000)    