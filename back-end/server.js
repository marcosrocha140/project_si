import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { db } from './conection.js';
<<<<<<< HEAD
=======
import { ObjectId } from 'mongodb';
>>>>>>> 8c532c4 (updates)


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());


app.get("/", async(req, res) => {
    res.send("Olá mundo - EndPoint")
});

<<<<<<< HEAD
app.get("/teams", async(req, res) => {
    res.send(await db.collection("teams").find().toArray())
});

=======
app.get("/teams", async (req, res) => {
    try {
        const teams = await db.collection("teams").aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: 'clubeId',
                    as: 'userClube'
                }
            }
        ]).toArray();
        res.send(teams);
    } catch (error) {
        console.error('Erro ao buscar clubes', error);
    }
});

// app.post('teams/:id/followers', async(req, res) =>{
//     const teamId = req.params.id;
//     const userId = req.body.userId;

//     try {
//         const teamFollow = await db.collection('teams').findOne({_id: new ObjectId(teamId)});

//          if (!teamFollow) return res.status(404).json({ error: 'Time não encontrado' });

//     const alreadyFollowing = team.followedBy?.includes(userId);

//     let update;

//     if (alreadyFollowing) {
//       // Deixar de seguir
//       update = {
//         $inc: { followers: -1 },
//         $pull: { followedBy: userId },
//       };
//     } else {
//       // Seguir
//       update = {
//         $inc: { followers: 1 },
//         $addToSet: { followedBy: userId },
//       };
//     }

//     await collection.updateOne({ _id: new ObjectId(teamId) }, update);

//     // Retorna os dados atualizados
//     const updated = await collection.findOne({ _id: new ObjectId(teamId) });

//     res.json({
//       followers: updated.followers,
//       following: updated.followedBy.includes(userId),
//     });
//     } catch (error) {
//         console.error('Erro ao seguir/desseguir time:', error);
//     res.status(500).json({ error: 'Erro interno do servidor' });
//     }
// })


>>>>>>> 8c532c4 (updates)
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

<<<<<<< HEAD
=======
app.put('/news/:id', async(req, res) =>{
    try {
        const id = req.params;
        const {title, description} = req.body;
    } catch (error) {
        
    }
})

>>>>>>> 8c532c4 (updates)
app.get("/tournaments", async (req, res) => {
    try {
        const news = await db.collection("tournaments")
            .find()
            .sort({ _id: -1 }) // ordena do mais recente para o mais antigo
            .toArray();

        res.send(news);
    } catch (error) {
        res.status(500).send({ error: "Erro ao buscar Torneios", details: error });
    }
});


app.get("/matches", async (req, res) => {
    try {
        const matches = await db.collection("matches")
            .find()
            // .sort({ _id: -1 }) // ordena do mais recente para o mais antigo
            .toArray();

        res.send(matches);
    } catch (error) {
        res.status(500).send({ error: "Erro ao buscar Jogos Marcados", details: error });
    }
});



app.get("/users", async(req, res) => {
<<<<<<< HEAD
    res.send(await db.collection("users").find().toArray())
=======
    try {
        res.send(await db.collection("users").aggregate([
            {
                $lookup: {
                from: 'teams',
                localField: 'clubeId',
                foreignField: '_id',
                as: 'club'
            }
            },
            { $unwind: { path: '$club', preserveNullAndEmptyArrays: true } }
        ]).toArray())
    } catch (error) {
        console.error("Erro ao buscar usuarios" + error)
    }
>>>>>>> 8c532c4 (updates)
});

const SECRET_KEY = 'seu_segredo_super_seguro';

app.post("/login", async(req, res) => {
    const {email, password} = req.body;

    try {
        
        const userAgg = await db.collection("users").aggregate([
        { $match: { email } },
        {
            $lookup: {
                from: 'teams',
                localField: 'clubeId',
                foreignField: '_id',
                as: 'clube'
            }
        },

        { $unwind: { path: '$clube', preserveNullAndEmptyArrays: true } }
        ]).toArray();

        const user = userAgg[0]; // pega o único usuário retornado


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
<<<<<<< HEAD
=======
                positionInClube: user.positionInClube,
>>>>>>> 8c532c4 (updates)
                email: user.email,
                city: user.city,
                admin: user.admin,
                jogador: user.jogador,
                image: user.image || null,
                clubeId: user.clubeId,
                clube: {
<<<<<<< HEAD
                    name: user.clube?.name || null,
                    image: user.clube?.image || null
=======
                    _id: user.clube?._id || null,
                    name: user.clube?.name || null,
                    image: user.clube?.image || null,
                    category: user.clube?.category || null,
                    CEO: user.clube?.CEO || null
>>>>>>> 8c532c4 (updates)
                }
                
            }
        });

    } catch (error) {
        console.log("Erro ao fazer login", error);
        res.status(500).send({error: "Erro interno no login", details: error});
    }
});

app.post("/users", async(req, res) => {

<<<<<<< HEAD
    const {name, email, password, rg} = req.body;
=======
    const {
        image = 'https://www.dropbox.com/scl/fi/8b9e6855gtacf5l93wa78/avatar.png?rlkey=6mqau3qxpmwy0r9eowbvsmohf&st=51kcgise&dl=1', 
        name,
        email, 
        password, 
        rg,
        admin = false
    } = req.body;
>>>>>>> 8c532c4 (updates)

    try {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const resultUser = await db.collection("users").insertOne(
            {
<<<<<<< HEAD
                name, 
                email, 
                password: hashedPassword, 
                rg
=======
                image,
                name,
                email, 
                password: hashedPassword, 
                rg,
                admin
>>>>>>> 8c532c4 (updates)
            });
        res.status(201).send(resultUser);
    } catch (error) {
        res.status(500).send({error: "erro ao cadastrar usuário!", details: error});
    }
    
})

app.listen(port, ()=>{
    console.log(`Servidor Rodando na porta: ${port}`);
})