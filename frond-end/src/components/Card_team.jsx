import Styles from './Styles/Card_team.module.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import { RiWomenLine } from "react-icons/ri";
import { AiOutlineMan } from "react-icons/ai";
import { teamsArray } from '../assets/teams'
const Card_team = ({_id, image, name, city, gender}) =>{
    return(
        <div className={Styles.team}>

            <div className='team_img_title'>

                {
                gender === 'feminino' ? (
                    <div>
                        <RiWomenLine style={{color:'#FF9FD7', }}/>
                    </div>
                ) : (<div>
                        <AiOutlineMan style={{color:'#08BBE7'}}/>
                    </div>
                )    
            }
            
                <img src={image} alt={`Foto ${name}`}/>
                <h2>{name}</h2>
                <span className='team_city'> Cidade: {city}</span>
            </div>
            <Link style={{textDecoration:'none'}} to={`/team/${_id}`}><p>Ver Perfil <FaChevronRight /></p></Link> 
        </div>
    )
}

export default Card_team