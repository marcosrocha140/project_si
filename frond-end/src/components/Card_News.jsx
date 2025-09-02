import Emotions from "./Emotions";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Input from "./Form/Input";
<<<<<<< HEAD

const Card_news = ({autor, icon,category, title, description, image, likes}) => {

  const [inputMsg, setInputMsg] = useState(false);

  function inputClick(){
    setInputMsg(prevState => !prevState);
=======
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";

const Card_news = ({
  autor,
  icon,
  category,
  title,
  description,
  image,
  likes,
}) => {
  const { isLogged, logout, user } = useAuth();

  const [inputMsg, setInputMsg] = useState(false);

  function inputClick() {
    setInputMsg((prevState) => !prevState);
>>>>>>> 8c532c4 (updates)
  }

  return (
    <div>
      <section className="news">
<<<<<<< HEAD
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

=======
        <div
          style={{
            textAlign: "left",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            <strong>Publicado por:</strong>{" "}
            <span style={{ color: "#08a8a8" }}>{autor}</span>{" "}
            <FaCheckCircle style={{ fontSize: "8px", color: "gray" }} /> em
            26/05/2025
          </span>
          <div
            style={{
              color: "#e3ff74",
              fontSize: "13px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            {icon}
            <span style={{ textShadow: "2px 1px 2px #0000003d" }}>
              {category}
            </span>
          </div>
        </div>

        <h2>{title}</h2>
        <p>{description}</p>
        <img className="news_image" src={image} alt="Imagem News" />
        <Emotions likes={likes} msgClick={inputClick} />
        {isLogged ? (
          inputMsg && (
            <div style={{display:'flex', alignItems: 'center'}}>
              <img
                style={{
                  width: "45px",
                  height:'45px',
                  borderRadius: "100%",
                  border: "1px solid green",
                }}
                src={user.image}
                alt={`Foto ${user.name}`}
              />
              <Input type="text" textPlace="Deixe seu comentário..." />
            </div>
          )
        ) : (
          <div style={{ textAlign: "center" }}>
            <p>
              Faça <Link to="login">Login</Link> para interagir
            </p>
          </div>
        )}
      </section>
>>>>>>> 8c532c4 (updates)
    </div>
  );
};

export default Card_news;
