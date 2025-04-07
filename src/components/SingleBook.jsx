import React from "react";
import Card from "react-bootstrap/Card";

function SingleBook({ book, onSelect, selected }) {
  return (
    <Card
      className="mx-5 text-center"
      style={{
        width: "50%",
        border: selected ? "2px solid red" : "none", // Se il libro è selezionato, aggiungiamo il bordo rosso
        cursor: "pointer", // Aggiungi il cursore per indicare che è cliccabile
      }}
      onClick={onSelect} // Al click sul libro, eseguiamo la selezione
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
