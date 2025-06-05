import express from 'express'
import bcrypty from 'bcrypt';
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


app.get("/users", async(req, res) => {
    res.send(await db.collection("users").find().toArray())
});

app.post("/users", async(req, res) => {

    const {name, email, password, rg} = req.body;

    try {

        const saltRounds = 10;
        const hashedPassword = await bcrypty.hash(password, saltRounds);
        
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