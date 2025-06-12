
import './Card.css';

function Card({ nome, especie, idade }) {
  return (
    <div className="pet-form-container">

      <h2>{nome}</h2>

      <div className="detail-row">
        <span >Espécie: </span>
        <span >{especie}</span>
      </div>

      <div className="detail-row">
        <span >Idade: </span>
        <span>{idade} anos</span>
      </div>
    </div>
  );
};

export default Card;