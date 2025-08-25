import "./Card.css";


function Pet({ name, type, age, favoriteFood, photo }) {
  return (
    <div className="card">
      <img src={photo} alt={name} className="card-img" />
      <div className="card-body">
        <h3>{name}</h3>
        <p><strong>Тип:</strong> {type}</p>
        <p><strong>Вік:</strong> {age}</p>
        <p><strong>Улюблена їжа:</strong> {favoriteFood}</p>
      </div>
    </div>
  );
}

export default Pet;