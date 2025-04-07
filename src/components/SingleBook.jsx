import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json"; // Assumiamo che sia un array di libri

function SingleBook() {
  const book = fantasy[0]; // Prende il primo elemento dell'array fantasy
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
