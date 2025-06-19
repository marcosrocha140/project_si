import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { db } from './conection.js';


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());


app.get("/", async(req, res) => {
    res.send("Olá mundo - EndPoint")
});

app.get("/teams", async(req, res) => {
    res.send(await db.collection("teams").find().toArray())
});

app.get("/news", async (req, res) => {
    try {
        const news = await db.collection("news")
            .find()
            .sort({ _id: -1 }) // ordena do mais recente para o mais antigo
            .toArray();

        res.send(news);
    } catch (error) {
        res.status(500).send({ error: "Erro ao buscar notícias", details: error });
    }
});


app.get("/matches", async (req, res) => {
    try {
        const matches = await db.collection("matches")
            .find()
            .sort({ _id: -1 }) // ordena do mais recente para o mais antigo
            .toArray();

        res.send(matches);
    } catch (error) {
        res.status(500).send({ error: "Erro ao buscar Jogos Marcados", details: error });
    }
});



app.get("/users", async(req, res) => {
    res.send(await db.collection("users").find().toArray())
});

const SECRET_KEY = 'seu_segredo_super_seguro';

app.post("/login", async(req, res) => {
    const {email, password} = req.body;

    try {
        
        const user = await db.collection("users").findOne({email});

        if(!user){
            return res.status(401).send({erro: "Usuário não encontrado!"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).send({error: "Senha Incorreta"});
        }

        const token = jwt.sign(
            { id: user._id, email: user.email},
            SECRET_KEY,
            {expiresIn: '1h'}

        );

        res.send({message: "Login realizado com sucesso!", 
            token,
            user: {
                name: user.name,
                email: user.email,
                admin: user.admin,
                image: user.image || null
            }
        });

    } catch (error) {
        console.log("Erro ao fazer login", error);
        res.status(500).send({error: "Erro interno no login", details: error});
    }
});

app.post("/users", async(req, res) => {

    const {name, email, password, rg} = req.body;

    try {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const resultUser = await db.collection("users").insertOne(
            {
                name, 
                email, 
                password: hashedPassword, 
                rg
            });
        res.status(201).send(resultUser);
    } catch (error) {
        res.status(500).send({error: "erro ao cadastrar usuário!", details: error});
    }
    
})

app.listen(port, ()=>{
    console.log(`Servidor Rodando na porta: ${port}`);
})