import { PiSoccerBallFill } from "react-icons/pi";
import { ImLocation2 } from "react-icons/im";

const Card_matchesTop = ({state, teamImg1, name1, teamGoals1 ,teamImg2, name2, teamGoals2 ,location}) => {
  return (
    <section className="match-card">
      <h2>{state}</h2>
      <div className="teams">
        <div className="teams_1">
          <img
            src={teamImg1}
            alt="Clube "
          />
          <span>{name1}</span>
          <h3>{teamGoals1}</h3>
          {/* <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "12px" }}>23°<PiSoccerBallFill/> Maicon Douglas</p>
            <p style={{ fontSize: "12px" }}>30°<PiSoccerBallFill/> Wkerlyson Batista</p>
            <p style={{ fontSize: "12px" }}>78°<PiSoccerBallFill/> Rafael Silva</p>
          </div> */}
        </div>

        <div className="card_matchesTopVs">
          <strong>VS</strong>
        </div>

        <div className="teams_1">
          <img
            src={teamImg2}
            alt="Clube "
          />
          <span>{name2}</span>
          <h3>{teamGoals2}</h3>
          {/* <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "12px" }}>Alan Silva <PiSoccerBallFill/>15°</p>
            <p style={{ fontSize: "12px" }}>Gabriel Gomes <PiSoccerBallFill/>50°</p>
          </div> */}
        </div>
      </div>
      <p>
        <strong><ImLocation2/> Local: </strong>{location}
      </p>
    </section>
  );
};

export default Card_matchesTop;
