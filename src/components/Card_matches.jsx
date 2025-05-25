import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { MdTimer } from "react-icons/md";


const Card_matches = ({type, backgroundImage, textTeam1, textTeam2, clube1, clube2, city, textLocation, textDate, textHours}) =>{
    return(
        <div>
            <div className="card_matches" style={{backgroundImage:`url(${backgroundImage})`}}>
                <p className="card_matches_type">{type}</p>
            
                <div className="card_matches_confront">
                    <div className="card_matches_club">
                        <img src={clube1} alt="clube1" style={{left:'18px'}} className="card_matches_image" title="Cipó dos Miguéis F.C" />
                        <h2 className="card_matches_title">{textTeam1}</h2>
                    </div>

                    <div style={{display: 'flex', alignItems:'center', gap:'20px'}}>
                        <h4>0</h4>
                        <h1>VS</h1>
                        <h4>0</h4>
                    </div>

                    <div className="card_matches_club2">
                        <h2 className="card_matches_title2">{textTeam2}</h2>
                        <img src={clube2} alt="clube2" style={{right:'22px'}} className="card_matches_image2" title="União Palestina" />
                    </div>
                </div>

                <div className="card_matches_infors">
                    <p><FaMapLocationDot/> <strong>Cidade: </strong> {city}</p>
                    <p><FaLocationDot /> <strong>Local:</strong> {textLocation}</p>
                    <p><MdOutlineDateRange /> <strong>Data:</strong> {textDate}</p>
                    <p><MdTimer /> <strong>Horário:</strong> {textHours}</p>
                </div>

                <button className="card_matches_btn">Ver Detalhes</button>
            </div>
        </div>
    )
}

export default Card_matches