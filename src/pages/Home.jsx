import Card_matchesTop from "../components/Card_matchesTop"
import Card_news from "../components/Card_News"

const Home = () =>{
    return(
        <div className="home_page">
            <Card_matchesTop/>
            <h1>Ultimas Notícias</h1>
            <Card_news/>
        </div>
        
    )
}
export default Home