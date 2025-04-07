import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea"; // Importiamo CommentArea

function BookList({ books }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState(null); // Stato per il libro selezionato

  // Filtro dei libri in base alla query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Funzione per gestire la selezione del libro
  const handleSelectBook = (asin) => {
    setSelectedBookAsin(asin); // Aggiorna lo stato con l'asin del libro selezionato
  };

  return (
    <div className="px-4">
      {/* Campo di ricerca */}
      <Form className="mb-4">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Cerca un libro..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Row className="g-3">
        {/* Colonna dei libri */}
        <Col xs={12} md={6}>
          {filteredBooks.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              onSelect={() => handleSelectBook(book.asin)} // Passiamo la funzione per selezionare il libro
              selected={book.asin === selectedBookAsin} // Applichiamo la selezione
            />
          ))}
        </Col>

        {/* Colonna dei commenti, che si attiva solo se un libro è selezionato */}
        <Col xs={12} md={6}>
          {selectedBookAsin && <CommentArea bookAsin={selectedBookAsin} />}
        </Col>
      </Row>
    </div>
  );
}

export default BookList;
