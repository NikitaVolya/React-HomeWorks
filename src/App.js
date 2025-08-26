
import './App.css';

import TelephoneBookPage from './components/TelephoneBook/TelephoneBookPage';
import EditableRestaurant from './components/Restaurant/EditableRestaurant';
import Login from './components/Login/Login';

import { useState } from "react";
import NoteBook from './components/NoteBook/NoteBook';
import LibraryPage from './components/Library/LibraryPage';
import HomeWork2 from './components/HomeWork2/HomeWork2';
import Article from './components/Article/Article';
import Modul8 from './components/Modul8/Modul8';


function HomeworkItem({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="homeworkItem">
            <div className="homeworkHeader" onClick={() => setOpen(prev => !prev)}>
                <span>{open ? "▼" : "▶"} {title}</span>
            </div>
            {open && <div className="homeworkContent">{children}</div>}
        </div>
    );
}

function App() {
  return (
    <div className="homeworksWrapper">
        <h1>
            Home works of <a href="https://github.com/NikitaVolya">NikitaVolia</a>
        </h1>
        <div className="homeworksContainer">

            <HomeworkItem title="Модуль 5. Вступ до функціональних компонентів. Частина 1">
                <HomeWork2></HomeWork2>
            </HomeworkItem>

            <HomeworkItem title="Модуль 7. Умовне відображення. Ререндеринг. Стилі">
                <Article
                    title="Сім чудес світу"
                    author="Історик Lorem"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec varius velit. Suspendisse potenti. Curabitur sodales mauris id justo suscipit, ac ultrices leo volutpat."
                    date="25 серпня 2025"
                    fontFamily="Georgia"
                    fontColor="#222"
                    fontSize="18px"
                    background="#eef6ff"
                    image="https://upload.wikimedia.org/wikipedia/commons/8/82/SevenWondersOfTheWorld.jpg"
                    imagePosition="right"
                    titleAlign="left"
                />

                <Article
                    title="Статуя Зевса в Олімпії"
                    author="Lorem Ipsum"
                    text="Phasellus feugiat leo vitae tortor vestibulum, at scelerisque libero tincidunt. Integer non feugiat odio."
                    date="12 серпня 2025"
                    fontFamily="Verdana"
                    fontColor="#003366"
                    fontSize="16px"
                    background="#fffbea"
                    image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgznc6sfRFQes4XH4rYExvMMSBAKPEoxI7iPLQU2VieS-Pq2mAqGTTelnV0LuhcYJ_vn-CaMLoSsGO9ji1ZwtHOc5kM5kJ051D4OcDamaY1TMIkoMktiG0tQ_b1uKmLz3azMTOJ4tlLEJje/s1600/1284041215_zevs.jpg"
                    imagePosition="left"
                    titleAlign="center"
                />
            </HomeworkItem>

            <HomeworkItem title="Homework 3">

                <h2>Restaurant</h2>
                <EditableRestaurant fields={{
                    name: "McDonalds",
                    address: "Вокзальна площа, 2, Київ, Україна, 01032",
                    rating: "4,2",
                    cuisine: "fast food"
                }}></EditableRestaurant>

                <hr></hr>
                <br></br>

                <h2>Login</h2>
                <Login login="nikita" password="123456"></Login>

            </HomeworkItem>

            <HomeworkItem title="Homework 4">
                <TelephoneBookPage />
            </HomeworkItem>

            <HomeworkItem title="Модуль 8. Фрагменти. Портали. Refs">
                <Modul8></Modul8>
            </HomeworkItem>

            <HomeworkItem title="Модуль 9. Side effects. Context API">
                <LibraryPage></LibraryPage>
            </HomeworkItem>

            <HomeworkItem title="Модуль 12. Класові компоненти">
                <NoteBook></NoteBook>
            </HomeworkItem>
        </div>
    </div>
  );  
}

export default App;
