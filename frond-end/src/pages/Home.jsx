import { FaBasketball } from "react-icons/fa6";
import { IoFootball } from "react-icons/io5";
<<<<<<< HEAD
import { FaCheckCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

import Card_matchesTop from "../components/Card_matchesTop"
import Card_news from "../components/Card_News"
import { newsArray } from "../assets/news"
import { Link } from 'react-router-dom'
import { useState,useEffect } from "react";
import { useAuth } from "../AuthContext";


const Home = () =>{

    const {isLogged, user, logout} = useAuth();


    return(
        <div className="home_page">

            <div className="game_page_top">
                <h1>Ultimas Notícias</h1>

                {/* O Link abaixo está apenas visivel para telas maiores */}

                {
                    isLogged ? 
                        ( <div className="game_page_top_user">
                            <Link to='profile'>
                                <h2 style={{color:'white'}}>{user?.name} </h2>
                            </Link>
                            {(user?.jogador || user?.admin) && (<p><FaCheckCircle title="Verificado" style={{color:'#696969', marginTop:'6px'}}/></p>)}
                              
                            <div className="game_page_top_image">
                                <img style={{width:'50px', borderRadius:'100%', margin:'auto'}} src={user?.image} alt="Foto" />
                                {
                                    user?.jogador && <p style={{fontSize:'9px', color:'wheat', letterSpacing:'1px'}}>{user.clube?.name}</p>
                                }
                            </div>

                            <div onClick={logout} className="game_page_top_exit">
                                <IoMdExit/>
                                <span style={{fontSize:'10px'}}>Sair</span>
                            </div>
                        </div> )
                    : <Link to='login' style={{textDecoration:'none'}}><h4 className="sidebar_navigation_btn">Entrar/Cadastrar</h4></Link>
                }
            </div>

            <div style={{display: 'flex', flexDirection:'row', gap:'15px'}}>
                
                <div>
                    {
                        newsArray.map((newsItem) =>(
                            <Card_news key={newsItem._id}
                            image={newsItem.image} 
                            title={newsItem.title} 
                            autor={newsItem.autor}
                            category={newsItem.category}
                            icon={
                                newsItem.category === "Basquete" ? (
                                    <FaBasketball/>
                                ) : <IoFootball/>
                            }

                            description={newsItem.description}
                            likes={newsItem.like}/>
                        ))
                    }
                </div>
                
            </div>
        </div>
        
    )
}
export default Home
=======
import Card_matchesTop from "../components/Card_matchesTop";
import Card_news from "../components/Card_News";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const { isLogged, user, logout } = useAuth();

  useEffect(() =>{
    const fetchNews = async () =>{
      try {
        const response = await axios.get('http://localhost:4000/news');
        setNews(response.data)
      } catch (error) {
        console.error(`Erro ao buscar post: ${error}`)
      }
    }
    fetchNews();
  },[])

  return (
    <div className="home_page">

        <h1>Ultimas Notícias</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "15px", justifyContent:'center' }}>
        <div>
          {news.map((newsItem) => (
            <Card_news
              key={newsItem._id}
              image={newsItem.image}
              title={newsItem.title}
              autor={newsItem.autor}
              category={newsItem.category}
              icon={
                newsItem.category === "Basquete" ? (
                  <FaBasketball />
                ) : (
                  <IoFootball />
                )
              }
              description={newsItem.description}
              likes={newsItem.like}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
>>>>>>> 8c532c4 (updates)
