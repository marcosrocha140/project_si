import Emotions from "./Emotions";

const Card_news = () => {
  return (
    <section className="news">
      <h2>Seja mais que torcedor</h2>
      <p>
        A Várzea da Onça E.C é mais do que uma equipe. Somos uma família apaixonada, com um legado 
        de conquistas e uma base de torcedores leais que vibram com cada vitória e se envolvem 
        ativamente com todas as nossas ações. Ao se tornar patrocinador, você se junta a um 
        projeto vencedor e reconhecido pela sua seriedade e profissionalismo. 
      </p>
      <img
        src="https://www.dropbox.com/scl/fi/snu9802kjt6velo4o1q91/patrocinio.jpg?rlkey=wxgphh5868rgsdy2p7d0kh8bz&st=x50nl379&dl=1"
        alt="Imagem News"
      />
      <Emotions />
    </section>
  );
};

export default Card_news;
