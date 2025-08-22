
import './App.css';

import TelephoneBookPage from './components/TelephoneBook/TelephoneBookPage';
import EditableRestaurant from './components/Restaurant/EditableRestaurant';
import Login from './components/Login/Login';

import { useState } from "react";
import NoteBook from './components/NoteBook/NoteBook';


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

            <HomeworkItem title="Homework 2">

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

            <HomeworkItem title="Homework 3">
                <TelephoneBookPage />
            </HomeworkItem>

            <HomeworkItem title="Модуль 12. Класові компоненти">
                <NoteBook></NoteBook>
            </HomeworkItem>
        </div>
    </div>
  );  
}

export default App;
