import Card_matches from '../components/Card_matches'
import CategorySport from '../components/CategorySport'
import { AiTwotoneSchedule } from "react-icons/ai";
import banner from '../images/banner4.png'
import { useState } from 'react'
import { matchesArray } from '../../api/api'
import Banner_Page from '../components/Banner_Pages'

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
            <Banner_Page banner={banner}/>
                
            <h1 className='matches_title'><AiTwotoneSchedule/>Calendário de <span className='matches_title_games'>Jogos</span></h1>
            
            <p style={{color:'white', margin:'2px 0'}}>Confira todos os jogos marcados e que já realizados.</p>

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