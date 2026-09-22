import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("philosophy");
  const [queryInput, setQueryInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          const formattedBooks = data.items.map((item, index) => ({
            isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier || `isbn-${index}`,
            title: item.volumeInfo.title || "Untitled",
            image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
            likes: 0,
          }));
          setBooks(formattedBooks);
        } else {
          setBooks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch books:", error);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (queryInput.trim() !== "") {
      setSearchTerm(queryInput);
    }
  };

  const handleLike = (isbn) => {
    setBooks(
      books.map((book) =>
        book.isbn === isbn ? { ...book, likes: book.likes + 1 } : book
      )
    );
  };

  const handleDelete = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Books Library</h2>

      <form onSubmit={handleSearch} className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="input-group shadow-sm">
            <span className="input-group-text bg-white text-secondary border-end-0">
              Query
            </span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search books..."
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
            />
            <button className="btn btn-primary px-4" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {books.length > 0 ? (
            books.map((book) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch"
                key={book.isbn}
              >
                <div className="card w-100 shadow-sm border-0 rounded-3 overflow-hidden d-flex flex-column">
                  <div
                    className="bg-light text-center p-3 d-flex justify-content-center align-items-center"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="img-fluid h-100 object-fit-contain shadow-sm"
                    />
                  </div>
                  <div className="card-body d-flex flex-column text-center">
                    <h6
                      className="card-title fw-bold text-dark mb-2"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {book.title}
                    </h6>
                    <p className="card-text text-muted small mt-auto">
                      ISBN: {book.isbn}
                    </p>
                  </div>

                  <div className="card-footer bg-white border-0 pb-3 d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-sm btn-outline-primary px-3"
                      onClick={() => handleLike(book.isbn)}
                    >
                      Like ({book.likes})
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger px-3"
                      onClick={() => handleDelete(book.isbn)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No books found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Books;