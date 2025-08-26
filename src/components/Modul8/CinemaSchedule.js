import "./CinemaSchedule.css";


function CinemaSchedule({ movie }) {
    return (
        <div className="cinema-card">
        <h2 className="cinema-title">{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} className="cinema-poster" />
        <p className="cinema-description">{movie.description}</p>
        <h3>Showtimes:</h3>
        <ul className="cinema-sessions">
            {movie.sessions.map((s, index) => (
            <li key={index}>{s}</li>
            ))}
        </ul>
        </div>
    );
};

export default CinemaSchedule;
