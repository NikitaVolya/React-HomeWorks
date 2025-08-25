import "./Card.css";


function FavoriteMovie({ title, director, year, studio, poster }) {
  return (
    <div className="card">
      <img src={poster} alt={title} className="card-img" />
      <div className="card-body">
        <h3>{title}</h3>
        <p><strong>Режисер:</strong> {director}</p>
        <p><strong>Рік:</strong> {year}</p>
        <p><strong>Кіностудія:</strong> {studio}</p>
      </div>
    </div>
  );
}

export default FavoriteMovie;