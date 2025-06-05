import backgroundImage2 from '../images/futebol.jpg'
import backgroundImage from '../images/banner_basquete.png'

import Card_matches from '../components/Card_matches'

const Matches = () =>{

    const image1 = 'https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=rgonokm9&dl=1'
    const image2 = 'https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=ltmsz3nm&dl=1'
    return(
        <div className='matches'>
            <h1>Calendários de Jogos</h1>
            <p>Confira todos os jogos marcados</p>
            <div className='matches_container'>

                <Card_matches type='Amistoso' backgroundImage={backgroundImage2}
                textTeam1='Cipó dos miguéis' 
                city='Quixadá/CE'
                textLocation='Arena Sertão da Vó'
                textDate='18/08/2025'
                textHours='18:00 horas'
                clube1='https://www.dropbox.com/scl/fi/rt5i6l20cucoe37avtxxb/cipo.png?rlkey=84duq37vmb9vli760gtlebuq0&st=fs6w0mag&dl=1'

                textTeam2='União Palestina' 
                clube2='https://www.dropbox.com/scl/fi/o4q74d8ubrg8uy1dgbncg/uniao.png?rlkey=064ngno17ieu9puq91fvv2mh4&st=oj1ay2u7&dl=1'
                />
        
                <Card_matches type='Clássico da várzea' backgroundImage={backgroundImage2}
                textTeam1='Várzea da onça E.C' 
                city='Quixadá/CE'
                textLocation='Arena deusimar Mendes'
                textDate='25/05/2025'
                textHours='16:00 horas'
                clube1={image1}

                textTeam2='Milan da várzea F.C' 
                clube2={image2}
                />

                <Card_matches type='Amistoso dos sertões' backgroundImage={backgroundImage2}
                textTeam1='Várzea da onça E.C' 
                city='Quixadá/CE'
                textLocation='Arena Vila Rica'
                textDate='04/04/2025'
                textHours='14:00 horas'
                clube1='https://www.dropbox.com/scl/fi/oirslqpybww2x7qzcot5y/vila_rica.png?rlkey=8mz58k0ocx5nlgt1yrcu88yuw&st=qqx1lw86&dl=1'

                textTeam2='Milan da várzea F.C' 
                clube2='https://www.dropbox.com/scl/fi/tvexf3uixhkqlsco42pho/flacaracol.png?rlkey=jzzegqyppmodrvw6mmn6h7a98&st=n0s98rlu&dl=1'
                />

                <Card_matches type='Cesta play' backgroundImage={backgroundImage}
                textTeam1='Los Grandes' 
                city='Fortaleza/CE'
                textLocation='Ginasio de fortaleza'
                textDate='02/02/2025'
                textHours='13:00 horas'
                clube1='https://www.dropbox.com/scl/fi/bv6voiyv3gptzvp39a0pm/los_grandes_banner.png?rlkey=q4khlfnn5y2kdjsfk5bnsu2si&st=8r3ljwru&dl=1'

                textTeam2='The Turnbull ACs' 
                clube2='https://www.dropbox.com/scl/fi/9xv4fqg80oaa6fnmmsz1u/turbuls-removebg-preview.png?rlkey=wcnsofu8j3u79qh5uqgsg9vrq&st=iqch0tch&dl=1'
                />
            </div>
        </div>
    )
}

export default Matches