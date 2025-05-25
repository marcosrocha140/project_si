import { PiSoccerBallFill } from "react-icons/pi";

const Card_matchesTop = () => {
  return (
    <section className="match-card">
      <h2>Fim de Jogo</h2>
      <div className="teams">
        <div className="teams_1">
          <img
            src="https://www.dropbox.com/scl/fi/880lfusv9hfcll7d6js6b/varzea-removebg-preview.png?rlkey=33bcmge5k56d8qg3p6zgn21io&st=qhzw2dry&dl=1"
            alt="Clube "
          />
          <span>Várzea da onça E.C</span>
          <h3>3</h3>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "12px" }}>23°<PiSoccerBallFill/> Maicon Douglas</p>
            <p style={{ fontSize: "12px" }}>30°<PiSoccerBallFill/> Wkerlyson Batista</p>
            <p style={{ fontSize: "12px" }}>78°<PiSoccerBallFill/> Rafael Silva</p>
          </div>
        </div>
        <strong>VS</strong>

        <div className="teams_1">
          <img
            src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=t0tz93l8&dl=1"
            alt="Clube "
          />
          <span>Milan da várzea F.C</span>
          <h3>2</h3>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "12px" }}>Alan Silva <PiSoccerBallFill/>15°</p>
            <p style={{ fontSize: "12px" }}>Gabriel Gomes <PiSoccerBallFill/>50°</p>
          </div>
        </div>
      </div>
      <p>
        <strong>Local: </strong>Arena Deusimar mendes (03/05/2025)
      </p>
    </section>
  );
};

export default Card_matchesTop;
