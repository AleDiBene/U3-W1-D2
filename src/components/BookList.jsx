import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ books }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtro dei libri in base alla query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4">
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
        {filteredBooks.map((book) => (
          <Col xs={12} md={4} lg={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BookList;
