import { useState } from "react"
import BookInput from "./BookInput";
import BooksTable from "./BooksTable";

function filteringBooks (books, filter) {
    if (filter == null)
        return books;
    return books.filter((book) => {
        if (filter.name && !book.name.toLowerCase().includes(filter.name.toLowerCase()))
            return false;
        
        if (filter.author && !book.author.toLowerCase().includes(filter.author.toLowerCase()))
        return false;

        if (filter.genre && !book.genre.toLowerCase().includes(filter.genre.toLowerCase()))
            return false;

        if (filter.publicationYear && book.publicationYear !== filter.publicationYear)
            return false;

        if (filter.pagesNumber && filter.pagesNumber != 0 && book.pagesNumber !== filter.pagesNumber)
            return false;

        return true;
    });
};


export default function LibraryPage() {

    const [availableBooks, setAvailableBooks] = useState([]);
    const [unavailableBooks, setUnavailableBooks] = useState([]);

    const [filterBook, setFilterBook] = useState(null);
    
    let globalBookId = 0;

    const newBookSubmit = (book) => {
        setAvailableBooks( (books) => {
            return [...availableBooks, {
                ...book, id: globalBookId++
            }]
        } );
    }

    const filterBookSubmit = (book) => {
        setFilterBook(book);
    }

    const deleteBook = (setBooks, book) => {
        setBooks(
            (books) => {
                return books.filter( b => b.id != book.id );
            }
        )
    }

    const moveFromTo = (setSource, setDirection, book) => {
        deleteBook(setSource, book);

        setDirection(books => [...books, book]);
    }

    console.log(availableBooks);
    console.log(unavailableBooks);

    return <>
        <BookInput
        formName="Add a new book"
        submitText="save"
        hideButtonText="Add a new book"
        onSubmit={newBookSubmit}/>

        <BookInput
        formName="Add book`s filter"
        submitText="find"
        hideButtonText="Set book`s filter"
        required={false}
        clearAfterSubmit={false}
        onSubmit={filterBookSubmit}/>

        <BooksTable
        tableName="Available books"
        setBooksList={setAvailableBooks}
        booksList={filteringBooks(availableBooks, filterBook)}
        buttons={[
            ["delete", (book) => { deleteBook(setAvailableBooks, book)} ],
            ["Check unavailable", (book) => { moveFromTo(setAvailableBooks, setUnavailableBooks, book)} ]
        ]}
        />

        <BooksTable
        tableName="Unavailable books"
        setBooksList={setUnavailableBooks}
        booksList={filteringBooks(unavailableBooks, filterBook)}
        buttons={[
            ["delete", (book) => { deleteBook(setUnavailableBooks, book)} ],
            ["Check available", (book) => { moveFromTo(setUnavailableBooks, setAvailableBooks, book)} ]
        ]}
        />
    </>
}