import Emotions from "./Emotions";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Input from "./Form/Input";

const Card_news = ({autor, icon,category, title, description, image, likes}) => {

  const [inputMsg, setInputMsg] = useState(false);

  function inputClick(){
    setInputMsg(prevState => !prevState);
  }

  return (
    <div>
      <section className="news">
        <div style={{textAlign:'left', fontSize:'12px', display:'flex', justifyContent:'space-between'}}>
          <span><strong>Publicado por:</strong> <span style={{color:'#08a8a8'}}>{autor}</span> <FaCheckCircle style={{fontSize:'8px', color:'gray'}}/> em 26/05/2025</span>
          <div style={{color:'#e3ff74', fontSize:'13px', fontWeight:'bold', display:'flex', alignItems:'center'}}>
            {icon}
            <span style={{textShadow:'2px 1px 2px #0000003d'}}>{category}</span>
          </div>
        </div>
        
          <h2>{title}</h2>
          <p>
            {description} 
          </p>
          <img
            className="news_image"
            src={image}
            alt="Imagem News"
          />
            <Emotions likes={likes} msgClick={inputClick}/>
            {
              inputMsg && <Input type='text' textPlace='Deixe seu comentário...'/>
            }
      </section>

    </div>
  );
};

export default Card_news;
