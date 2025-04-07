import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, // stato iniziale, il libro non è selezionato
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected, // Inverte il valore di selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className="mx-5 text-center"
        style={{
          width: "50%",
          border: selected ? "2px solid red" : "none", // Aggiungi bordo rosso se selezionato
        }}
        onClick={this.toggleSelected} // Al clic cambia lo stato
      >
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
