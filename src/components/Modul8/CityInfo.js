import "./CityInfo.css";


function CityInfo({ country, city }) {
    return (
        <div className="city-card">
        <h2>{country}</h2>
        <h3>{city.name}</h3>
        <img src={city.coat} alt={`${city.name} coat`} className="city-coat" />
        <p className="city-description">{city.description}</p>
        <p><b>Population:</b> {city.population}</p>
        <p><b>Area:</b> {city.area} km²</p>
        </div>
    );
};

export default CityInfo;
