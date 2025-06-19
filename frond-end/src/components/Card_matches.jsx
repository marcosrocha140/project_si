import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { MdTimer } from "react-icons/md";


const Card_matches = ({type, backgroundImage, teamHome, teamAway, imageHome, imageAway, city, location, date, textHours}) =>{
    return(
        <div>
            <div className="card_matches" style={{backgroundImage:`url(${backgroundImage})`}}>
                <p className="card_matches_type">{type}</p>
            
                <div className="card_matches_confront">
                    <div className="card_matches_club">
                        <img src={imageHome} alt="clube1" style={{left:'18px'}} className="card_matches_image" title="Cipó dos Miguéis F.C" />
                        <h2 className="card_matches_title">{teamHome}</h2>
                    </div>

                    <div style={{display: 'flex', alignItems:'center', gap:'20px'}}>
                        <h4>0</h4>
                        <h1>VS</h1>
                        <h4>0</h4>
                    </div>

                    <div className="card_matches_club2">
                        <h2 className="card_matches_title2">{teamAway}</h2>
                        <img src={imageAway} alt="clube2" style={{right:'22px'}} className="card_matches_image2" title="União Palestina" />
                    </div>
                </div>

                <div className="card_matches_infors">
                    <p><FaMapLocationDot/> <strong>Cidade: </strong> {city}</p>
                    <p><FaLocationDot /> <strong>Local:</strong> {location}</p>
                    <p><MdOutlineDateRange /> <strong>Data:</strong> {date}</p>
                    <p><MdTimer /> <strong>Horário:</strong> {textHours}</p>
                </div>

                <button className="card_matches_btn">Ver Detalhes</button>
            </div>
        </div>
    )
}

export default Card_matches