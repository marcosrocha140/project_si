import Card_matchesTop from "../components/Card_matchesTop"
import Card_news from "../components/Card_News"
import { newsArray } from "../assets/news"

const Home = () =>{
    return(
        <div className="home_page">
            <h1>Ultimas Notícias</h1>
            <div style={{display: 'flex', flexDirection:'row', gap:'15px'}}>
                
                <div>
                    {
                        newsArray.map((newsItem) =>(
                            <Card_news key={newsItem._id}
                            image={newsItem.image} 
                            title={newsItem.title} 
                            description={newsItem.description}
                            autor={newsItem.autor}
                            likes={newsItem.like}/>
                        ))
                    }
                </div>
                
                <div className="lastMatches">
                    <Card_matchesTop
                    state='Em andamento - (2° Tempo)'
                    teamImg1='https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=ltmsz3nm&dl=1'
                    name1='Milan da várzea F.C'
                    teamGoals1={2}
                    teamImg2='https://www.dropbox.com/scl/fi/8rwhv63c9bvvhvrhz112b/ChatGPT_Image_18_de_mai._de_2025__12_17_47-removebg-preview.png?rlkey=7ola7n24n7y9a4cyevbd7qcd6&st=9p9d80bf&dl=1'
                    name2='Espinheiro F.C'
                    location='Arena Milan'
                    teamGoals2={1}/>

                    <Card_matchesTop
                    state="Fim de Jogo"
                    teamImg1='https://www.dropbox.com/scl/fi/ka79hkpjmlnyscu8nk7pl/caffe.png?rlkey=aztz5yeru5t66fg17y6al0vzq&st=yeddei3r&dl=1'
                    name1='Caffé F.C'
                    teamGoals1={1}
                    teamImg2='https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=rgonokm9&dl=1'
                    name2='Várzea da Onça E.C'
                    location='Arena Caffé Campestre'
                    teamGoals2={3}/>

                    <Card_matchesTop
                    state='Fim de Jogo'
                    teamImg1='https://www.dropbox.com/scl/fi/oirslqpybww2x7qzcot5y/vila_rica.png?rlkey=8mz58k0ocx5nlgt1yrcu88yuw&st=qqx1lw86&dl=1'
                    name1='Vila Rica E.C'
                    teamGoals1={1}
                    teamImg2='https://www.dropbox.com/scl/fi/rt5i6l20cucoe37avtxxb/cipo.png?rlkey=84duq37vmb9vli760gtlebuq0&st=fs6w0mag&dl=1'
                    name2='Cipó dos migueís F.C'
                    teamGoals2={1}
                    location='Arena Vila Rica'/>

                    <Card_matchesTop
                    state='Fim de Jogo'
                    teamImg1='https://www.dropbox.com/scl/fi/9xv4fqg80oaa6fnmmsz1u/turbuls-removebg-preview.png?rlkey=wcnsofu8j3u79qh5uqgsg9vrq&st=iqch0tch&dl=1'
                    name1='The Turnbull ACs'
                    teamGoals1={98}
                    teamImg2='https://www.dropbox.com/scl/fi/8hqdx1ircyscy2ijbabjq/log_grandes.png?rlkey=066h503kl58habhutnm32k5a2&st=xoysdhbf&dl=1'
                    name2='Los Grandes'
                    teamGoals2={102}
                    location='Ginásio de Fortaleza'/>
                    
                </div>
            </div>
        </div>
        
    )
}
export default Home