import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false, // Lo stato che determina se il libro è selezionato
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected, // Inverte lo stato di selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Card
          className="mx-5 text-center"
          style={{
            width: "50%",
            border: selected ? "2px solid red" : "none", // Selezionato: bordato di rosso
          }}
          onClick={this.toggleSelected} // Cambia lo stato al click
        >
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>

        {selected && <CommentArea bookId={book.asin} />}
      </div>
    );
  }
}

export default SingleBook;
