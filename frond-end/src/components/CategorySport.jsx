<<<<<<< HEAD
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
=======
import { teamsArray } from "../../api/api";
import iconBaquete from "../images/iconBasquete.png";
import iconTenis from "../images/iconTenis.png";
import iconBasebol from "../images/iconBasebol.png";
import iconFutebol from "../images/iconFutebol.png";
import iconBasquete from "../images/iconBasquete.png";
import iconVolei from "../images/iconVolei.png";

const CategorySport = ({ selectedCategory, categoria }) => {
  const categorias = [
    "Todos",
    ...new Set(teamsArray.map((teamCategory) => teamCategory.category)),
  ];

  return (
    <div className="matches_category">
      {categorias.map((categoria) => (
        <div key={categoria} onClick={() => selectedCategory(categoria)}>
          {categoria == "Futebol" || categoria == "Futsal" ? (
            <div className="matches_category_container">
              <img src={iconFutebol} alt="Futebol" style={{ width: "40px" }} />
              <p>{categoria}</p>
            </div>
          ) : categoria == "Basquete" ? (
            <div className="matches_category_container">
              <img
                src={iconBasquete}
                alt="Basquete"
                style={{ width: "40px" }}
              />
              <p>{categoria}</p>
            </div>
          ) : (
            <div className="matches_category_container">
              <img src={iconVolei} alt="Volei" style={{ width: "40px" }} />
              <p>{categoria}</p>
            </div>
          )}
        </div>
      ))}

      <div className="matches_category_container" style={{ opacity: "30%" }}>
        <img src={iconBasebol} alt="Basebol" style={{ width: "40px" }} />
        <p>Basebol</p>
      </div>

      <div className="matches_category_container" style={{ opacity: "30%" }}>
        <img src={iconTenis} alt="Tenis" style={{ width: "40px" }} />
        <p>Tenis</p>
      </div>
    </div>
  );
};

export default CategorySport;
>>>>>>> 8c532c4 (updates)
