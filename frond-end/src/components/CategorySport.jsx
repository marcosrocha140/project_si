import { IoMdFootball, IoIosBaseball, IoIosTennisball, IoIosBasketball } from "react-icons/io";
import { FaVolleyballBall, FaBowlingBall } from "react-icons/fa";
import { teamsArray } from "../../api/api"

const CategorySport = ({selectedCategory, categoria}) =>{

    const categorias = ["Todos", ...new Set(teamsArray.map(teamCategory => teamCategory.category))];

    return(
        <div className="matches_category">

            {
                categorias.map((categoria) =>(
                    
                    <div key={categoria} onClick={() => selectedCategory(categoria)}>
                        {
                            categoria == "Futebol" || categoria == "Futsal" ? 
                            (<p>{categoria}<IoMdFootball/></p>) : categoria == "Basquete" ? 
                            (<p>{categoria} <IoIosBasketball/></p>) : <p>{categoria} <FaVolleyballBall/></p>
                        }
                        
                    </div>
                ))
            }
            {/* <div onClick={selectedCategory}>
                <p>Futebol</p>
                <IoMdFootball/>
            </div>

            <div>
                <p>Futsal</p>
                <IoMdFootball/>
            </div>

            <div>
                <p>Volei</p>
                <FaVolleyballBall/>
            </div>

            <div>
                <p>Basquete</p>
                <IoIosBasketball/>
            </div> */}

            <div style={{opacity:'30%'}}>
                <p>Basebol</p>
                <IoIosBaseball/>
            </div>

            <div style={{opacity:'30%'}}>
                <p>Tenis</p>
                <IoIosTennisball/>
            </div>
                
             <div style={{opacity:'30%'}}>
                <p>Boliche</p>
                <FaBowlingBall/>
            </div>   
        </div>
    )
}

export default CategorySport