import Banner_Page from "../components/Banner_Pages";
import Card_tournaments from "../components/Card_tournaments"
import CategorySport from "../components/CategorySport";
import banner from '../images/banner5.png'
import { GiTrophyCup, GiSportMedal } from "react-icons/gi";
import { tournamentsArray } from "../../api/api";

const Tournaments = () => {
    
    return (
        <div className="tournaments_container">

            <Banner_Page banner={banner}/>

            <div className="tournaments_title">
                <GiTrophyCup style={{fontSize:'2.4em'}}/> 
                <h1>Torneios Esportivos</h1>
                <GiSportMedal style={{fontSize:'2.4em'}}/> 
            </div>

            <p style={{fontSize:'14px'}}>Confira os principais torneios organizados na região.</p>
            <CategorySport/>
            {/* <input className="tournament_search" type="text" placeholder="Buscar por nome do torneio..."/> */}
                <div style={{display:'flex', gap:'10px'}}>
                    <p className="tournament_p">Abertos</p>
                    <p className="tournament_p">Encerrados</p>
                </div>
            
            <div className="tournaments_cards">
                {/* https://www.sjb.rj.gov.br/imagens/conteudo/15538_a58d6340b067098c7141af0bc059156c.jpeg */}
                
                {
                    tournamentsArray.map((tournament) =>(
                        <Card_tournaments {...tournament} key={tournament._id}/>
                    ))
                }
            </div>

        </div>
    )
}

export default Tournaments