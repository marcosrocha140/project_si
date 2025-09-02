import Card_matches from '../components/Card_matches'
import CategorySport from '../components/CategorySport'
<<<<<<< HEAD
import { AiTwotoneSchedule } from "react-icons/ai";
import banner from '../images/banner4.png'
import { useState } from 'react'
import { matchesArray } from '../../api/api'
import Banner_Page from '../components/Banner_Pages'

const Matches = () =>{

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
    
        const categorias = ["Todos", ...new Set(matchesArray.map(matches => matches.category))];
=======
import banner from '../images/banner4.png'
import { useState, useEffect } from 'react'
import Banner_Page from '../components/Banner_Pages'
import axios from 'axios'

const Matches = () =>{
    const [matches, setMatches] = useState([]);

    useEffect(() =>{
        const fetchMatches = async () =>{
            try {
                const response = await axios.get("http://localhost:4000/matches");
                setMatches(response.data)
            } catch (error) {
                console.error(`Erro ao buscar jogos: ${error}`)
            }
        }
        fetchMatches();
    },[])

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
    
        const categorias = ["Todos", ...new Set(matches.map(matche => matche.category))];
>>>>>>> 8c532c4 (updates)

        const selectionCategory = (categoria) =>{
            setCategoriaSelecionada(categoria);
            console.log("Categoria selecionada: ",categoria);
        }
    
        const jogosFiltrados = categoriaSelecionada === "Todos"
<<<<<<< HEAD
        ? matchesArray
        : matchesArray.filter(matches => matches.category === categoriaSelecionada);
=======
        ? matches
        : matches.filter(matche => matche.category === categoriaSelecionada);
>>>>>>> 8c532c4 (updates)

    return(
        <div className='matches'>
            <Banner_Page banner={banner}/>
                
<<<<<<< HEAD
            <h1 className='matches_title'><AiTwotoneSchedule/>Calendário de <span className='matches_title_games'>Jogos</span></h1>
=======
            <h1 style={{fontSize:'4.1em'}}>Calendario de Jogos</h1>
>>>>>>> 8c532c4 (updates)
            
            <p style={{color:'white', margin:'2px 0'}}>Confira todos os jogos marcados e que já realizados.</p>

            <CategorySport selectedCategory={selectionCategory}/>

            <h1>{categoriaSelecionada}</h1>

<<<<<<< HEAD
=======
            <p className='text_matches_date'>Jogos de Domingo 10 ago 2025</p>
>>>>>>> 8c532c4 (updates)
            <div className='matches_container'>
                
                {
                    jogosFiltrados.map((matches) =>(
                        <Card_matches type='Amistoso' {...matches} key={matches._id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Matches