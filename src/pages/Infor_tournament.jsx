import { IoMdArrowRoundBack } from "react-icons/io";
import Position_table from "../components/Position_table";

const Infor_tournament = () =>{
    return(
        <div className="Infor_tournament_container">
            <div className="detais">
                <h2>Detalhes do Torneio</h2>
                <div>
                    <IoMdArrowRoundBack/>
                    <p>Voltar</p>
                </div>
                
            </div>

            <div>
                <h1>Tabela de Classificação</h1>
                <Position_table/>
            </div>
        </div>
    )
}

export default Infor_tournament