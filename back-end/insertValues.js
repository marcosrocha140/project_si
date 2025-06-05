// Criei esse arquivo para colocar o valores do meu arquivo para o banco de dados
import { db } from './conection.js';
import {teamsArray} from '../frond-end/src/assets/teams.js'

const newTeamsArray = teamsArray.map((teamObj) =>{
    const newTeams = {...teamObj};
    delete newTeams.id;

    return newTeams;
});

const resTeams = await db.collection("teams").insertMany(newTeamsArray);

console.log(resTeams);