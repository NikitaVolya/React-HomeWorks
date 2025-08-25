import "./BooksTable.css";

export default function BooksTable({
  tableName,
  booksList = [],
  buttons = [],
  setBooksList = () => {}
}) {

  const handleInputChange = (book, field, value) => {
    setBooksList(books => {
        return [...books.filter(b => b.id != book.id), 
            {
                ...book, [field]: value
            }
        ]
    });
  };

  return (
    <div className="books-table-container">
      <h2>{tableName}</h2>
      <table className="books-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publication Year</th>
            <th>Pages</th>
            {
                buttons.map(([label, handler], btnIndex) => (
                    <th>
                       { label }
                    </th>
                ))
            }
          </tr>
        </thead>
        <tbody>
          {booksList.length > 0 ? (
            booksList.map((book, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={book.name}
                    onChange={(e) =>
                      handleInputChange(book, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={book.author}
                    onChange={(e) =>
                      handleInputChange(book, "author", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={book.genre}
                    onChange={(e) =>
                      handleInputChange(book, "genre", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={book.publicationYear}
                    onChange={(e) =>
                      handleInputChange(
                        book,
                        "publicationYear",
                        Number(e.target.value)
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={book.pagesNumber}
                    onChange={(e) =>
                      handleInputChange(book, "pagesNumber", Number(e.target.value))
                    }
                  />
                </td>
                {
                    buttons.map(([label, handler], btnIndex) => (
                        <td>
                            <button
                                key={btnIndex}
                                onClick={() => handler(book)}
                            >
                                { label }
                            </button>
                        </td>
                    ))
                }
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5 + buttons.length} className="empty-row">
                No books
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
