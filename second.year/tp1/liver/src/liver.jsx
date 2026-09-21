import React from 'react';
import data from './books.json'; // Kan-importiw l'fichier JSON
import 'bootstrap/dist/css/bootstrap.css';

function Livre() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Liste des Livres</h1>
            
            <div className="row">
                {data.books.map((book, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm border-0 bg-light">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{book.name}</h5>
                                <h6 className="card-subtitle mb-3 text-muted">
                                    <i className="bi bi-pen"></i> B9alam: {book.writer}
                                </h6>
                                <div className="card-text small">
                                    <p className="mb-1"><strong>Dar Nacher:</strong> {book.publisher}</p>
                                    <p className="mb-1"><strong>L3am:</strong> {book.year}</p>
                                    <p className="mb-1"><strong>Safahat:</strong> {book.pages}</p>
                                    <p className="mb-0"><strong>Lougha:</strong> {book.language}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Livre;