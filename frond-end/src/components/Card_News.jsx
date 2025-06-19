import Emotions from "./Emotions";
import { FaCheckCircle } from "react-icons/fa";

const Card_news = ({autor, icon,category, title, description, image, likes}) => {
  return (
    <div>
      <section className="news">
        <div style={{textAlign:'left', fontSize:'12px', display:'flex', justifyContent:'space-between'}}>
          <span><strong>Publicado por:</strong> {autor} <FaCheckCircle style={{fontSize:'8px', color:'gray'}}/> em 26/05/2025</span>
          <div style={{color:'#5e5f5a94', fontSize:'13px', fontWeight:'bold', display:'flex', alignItems:'center'}}>
            {icon}
            <span style={{textShadow:'2px 1px 2px #0000003d'}}>{category}</span>
          </div>
        </div>
        
          <h2>{title}</h2>
          <p>
            {description} 
          </p>
          <img
            src={image}
            alt="Imagem News"
          />
            <Emotions likes={likes}/>
      </section>

    </div>
  );
};

export default Card_news;
