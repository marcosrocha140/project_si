import { AiFillBook } from "react-icons/ai";

const Player_Statistics = () =>{
    return(
        <div className="profile_historic_container">
            <h1>Histórico de Jogos</h1>
            <div className="profile_historic">
                <div className="profile_Userinfor3">
                    <p>Jogos</p>
                    <h2>34</h2>
                </div>

                <div className="profile_Userinfor3">
                    <p>Gols</p>
                    <h2>3</h2>
                </div>

                <div className="profile_Userinfor3">
                    <p>Assistências</p>
                    <h2>0</h2>
                </div>

                <div className="profile_Userinfor3">
                    <p>Cartões</p>
                    <h2><AiFillBook style={{color:'yellow', fontSize:'18px'}}/> 1 <AiFillBook style={{color:'red', fontSize:'18px'}}/> 0</h2>
                </div>
            </div>
        </div>
    )
}

export default Player_Statistics