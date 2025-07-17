
import './App.css';

import TelephoneBookPage from './components/TelephoneBook/TelephoneBookPage';

import { useState } from "react";


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
            <HomeworkItem title="Homework 3">
                <TelephoneBookPage />
            </HomeworkItem>
        </div>
    </div>
  );  
}

export default App;
