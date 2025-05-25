import { IoFootball } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Card_tournaments = ({banner, title, subscribe, category, city, date, teams}) => {
    return(
        <div className='tournament'>
            <div style={{backgroundImage:`url(${banner})`}} className="tournaments_banner">

            </div>

            <div style={{display:'flex', alignItems:'center', padding:'6px 7px'}}>
                <img className='tournament_logo' src='https://www.dropbox.com/scl/fi/7vd49htkcdlyonz9tugv5/trofeu.png?rlkey=j4xtk8j2esgdm45jyi9u7xbiz&st=h6o4pnf2&dl=1' alt="Trofeu" />
                <h1 className="tournament_title">{title}</h1>
            </div>
                
                <div style={{textAlign:'left', padding:'5px 7px', display:'flex', flexDirection:'column'}}>
                    <p style={{color:'#999999'}}><IoFootball/> {category}</p>
                    <p style={{color:'#d79153'}}><FaMapLocationDot/> <strong>Local:</strong> {city}</p>
                    <p style={{color:'#41c38e'}}><BsCalendar2Date/> <strong>Início:</strong> {date}</p>
                    <p style={{color:'#a550b3'}}><IoPerson/> {teams}</p>
                    <span style={{fontSize:'8px', color:'gray'}}>Tubaroas da V.D.O e outras 3 equipes conhecidas irão participar</span>
                    <Link to="infor_tournament"><p>Mais detalhes</p></Link>
                </div>
                <p className="tournament_subscribe"><strong>{subscribe}</strong></p>
        </div>
    )
}

export default Card_tournaments