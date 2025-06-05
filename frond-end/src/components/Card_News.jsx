import Emotions from "./Emotions";
import { FaCheckCircle } from "react-icons/fa";

const Card_news = ({autor, title, description, image, likes}) => {
  return (
    <div>
      <section className="news">
        <div style={{textAlign:'left', fontSize:'12px'}}>
          <span><strong>Publicado por:</strong> {autor} <FaCheckCircle style={{fontSize:'8px', color:'gray'}}/> em 26/05/2025</span>
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
