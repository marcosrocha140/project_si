import backgroundImage2 from '../images/futebol.jpg'
import backgroundImage from '../images/banner_basquete.png'

import Card_matches from '../components/Card_matches'
import CategorySport from '../components/CategorySport'
import { useState } from 'react'
import { matchesArray } from '../../api/api'

const Matches = () =>{

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
    
        const categorias = ["Todos", ...new Set(matchesArray.map(matches => matches.category))];

        const selectionCategory = (categoria) =>{
            setCategoriaSelecionada(categoria);
            console.log("Categoria selecionada: ",categoria);
        }
    
        const jogosFiltrados = categoriaSelecionada === "Todos"
        ? matchesArray
        : matchesArray.filter(matches => matches.category === categoriaSelecionada);

    return(
        <div className='matches'>
            <h1 style={{backgroundColor:'white'}}>Calendário de <span className='matches_title'>Jogos</span></h1>
            <p style={{color:'white', margin:'2px 0'}}>Confira todos os jogos marcados</p>

            <CategorySport selectedCategory={selectionCategory}/>

            <h1>{categoriaSelecionada}</h1>
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