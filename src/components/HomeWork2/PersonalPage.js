import "./Card.css";


function PersonalPage({ name, phone, email, city, experience, skills, photo }) {
  return (
    <div className="card">
      <img src={photo} alt={name} className="card-img" />
      <div className="card-body">
        <h3>{name}</h3>
        <p><strong>Телефон:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Місто:</strong> {city}</p>
        <p><strong>Досвід:</strong> {experience}</p>
        <p><strong>Навички:</strong> {skills.join(", ")}</p>
      </div>
    </div>
  );
}

export default PersonalPage;
