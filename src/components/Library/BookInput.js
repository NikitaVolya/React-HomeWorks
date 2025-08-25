import { useState } from "react";
import "./BookInput.css";


export default function BookInput({ 
    onSubmit, 
    submitText = "submit", 
    formName = "form", 
    hideButtonText = null ,
    clearAfterSubmit = true,
    required = true
}) {
    const [input, setInput] = useState({
        name: "",
        author: "",
        genre: "",
        publicationYear: "",
        pagesNumber: 0
    });

    const clearInput = () => {
        setInput({
            name: "",
            author: "",
            genre: "",
            publicationYear: "",
            pagesNumber: 0
        });
    }

    const [visible, setVisible] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();

        let response = { ...input };
        onSubmit(response);

        if (clearAfterSubmit)
            clearInput();

        if (hideButtonText) {
            setVisible(false);
        }
    }

    const inputForm = <form className="book-form" onSubmit={formSubmit}>
            <h2>{ formName }</h2>

            <label>
            Title
            <input
                type="text"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                required={required}
            />
            </label>

            <label>
            Author
            <input
                type="text"
                value={input.author}
                onChange={(e) => setInput({ ...input, author: e.target.value })}
                required={required}
            />
            </label>

            <label>
            Genre
            <input
                type="text"
                value={input.genre}
                onChange={(e) => setInput({ ...input, genre: e.target.value })}
            />
            </label>

            <label>
            Publication Year
            <input
                type="number"
                value={input.publicationYear}
                onChange={(e) =>
                setInput({ ...input, publicationYear: e.target.value })
                }
            />
            </label>

            <label>
            Number of Pages
            <input
                type="number"
                value={input.pagesNumber}
                onChange={(e) =>
                setInput({ ...input, pagesNumber: parseInt(e.target.value) })
                }
                min={required ? "1" : "0"}
            />
            </label>

            <button type="submit">{submitText}</button>
        </form>

    return <>
        { hideButtonText ? 
        <>
            <button className="toggle-btn" onClick={() => setVisible(true)}>
                { hideButtonText }
            </button>
            { 
            visible && 
                <div className="overlay">
                    <button
                        type="button"
                        className="close-btn"
                        onClick={() => setVisible(false)}>
                    x
                    </button>
                    { inputForm }
                </div>
            }
        </> :
        inputForm }
    </>;
}