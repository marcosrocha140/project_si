import Card_tournaments from "../components/Card_tournaments"

const Tournaments = () => {
    let count = 0;
    return (
        <div className="tournaments_container">
            <h1>Torneios Esportivos</h1>
            <p style={{fontSize:'14px'}}>Confira os principais torneios organizados na região</p>
            {/* <input className="tournament_search" type="text" placeholder="Buscar por nome do torneio..."/> */}
            <div className="tournaments_filters">
                <p className="tournament_p">Abertos</p>
                <p className="tournament_p">Encerrados</p>
                <select>
                    <option value="0">Categoria</option>
                    <option value="1">Futebol</option>
                    <option value="2">Futsal</option>
                    <option value="3">Basquete</option>
                    <option value="4">Volei</option>
                </select>
            </div>
            
            <div className="tournaments_cards">
                {/* https://www.sjb.rj.gov.br/imagens/conteudo/15538_a58d6340b067098c7141af0bc059156c.jpeg */}
                <Card_tournaments 
                banner='https://www.dropbox.com/scl/fi/wu9snijmzh76rel4sdrhe/bannerTorneioFutsalF.png?rlkey=cr57xfzgms4xic66jyn3yfscn&st=9aywbz15&dl=1'
                title='Torneio Futsal Feminino'
                subscribe='Torneio Encerrado'
                category='Futsal'
                city='Quixadá-CE'
                date='15/12/2025'
                teams={`Participantes: ${count = 12} equipes`}/>
                
                <Card_tournaments 
                banner='https://pereirabarreto.sp.gov.br/wp-content/uploads/2019/03/Mini-Campo.jpg'
                title='Campeonato Municipal Mini Campo'
                subscribe='Torneio Encerrado'
                category='Futebol'
                city='Banabuiú-CE'
                date='08/06/2025'
                teams={`Participantes: ${count = 17} equipes`}/>

            </div>

        </div>
    )
}

export default Tournaments