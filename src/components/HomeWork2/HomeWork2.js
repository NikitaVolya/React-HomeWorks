import FavoriteMovie from "./FavoriteMovie";
import PersonalPage from "./PersonalPage";
import Clock from "./Clock";
import Pet from "./Pet";
import "./Card.css";

function HomeWork2() {
  return (
    <div className="app-container">
      <h1>React Завдання – Модуль 5</h1>

      <section>
        <h2>1. Улюблений фільм</h2>
        <FavoriteMovie 
          title="Inception" 
          director="Christopher Nolan" 
          year="2010" 
          studio="Warner Bros." 
          poster="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
        />
      </section>

      <section>
        <h2>2. Персональна сторінка</h2>
        <PersonalPage 
          name="Іван Петренко" 
          phone="+380 67 123 45 67"
          email="ivan@example.com"
          city="Київ"
          experience="3 роки у веб-розробці"
          skills={["React", "Node.js", "SQL", "Docker"]}
          photo="https://i.pravatar.cc/200"
        />
      </section>

      <section>
        <h2>3. Поточний час</h2>
        <Clock />
      </section>

      <section>
        <h2>4. Домашній улюбленець</h2>
        <Pet 
          name="Барсик" 
          type="Кіт" 
          age="2 роки" 
          favoriteFood="Риба" 
          photo="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
        />
      </section>
    </div>
  );
}

export default HomeWork2;
