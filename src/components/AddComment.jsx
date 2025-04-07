import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "", // Testo del commento
    rating: 1, // Valutazione da 1 a 5
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value, // Aggiorna stato in base al campo modificato
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { comment, rating } = this.state;
    const { bookId } = this.props; // Id del libro a cui aggiungere il commento

    if (comment && rating) {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZTUwNjI4Y2E0YzAwMTU1MDE4YzYiLCJpYXQiOjE3NDQwMzcxMjYsImV4cCI6MTc0NTI0NjcyNn0.qzJg4sorisfVv4cSrGAiOsc0rAv8mYmR5g0UyLBl9YY",
            },
            body: JSON.stringify({
              bookId, // id del libro
              comment,
              rating,
              username: "Utente Anonimo", // Modifica per usare un nome utente reale se disponibile
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Errore nel salvataggio del commento");
        }
        const data = await response.json();
        console.log("Commento aggiunto:", data);
        this.setState({ comment: "", rating: 1 }); // Reset del form dopo invio
      } catch (error) {
        console.error("Errore nell'aggiungere il commento", error);
      }
    }
  };

  render() {
    const { comment, rating } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="comment"
          value={comment}
          onChange={this.handleInputChange}
          placeholder="Aggiungi un commento..."
        />
        <div>
          <label>Valutazione: </label>
          <select
            name="rating"
            value={rating}
            onChange={this.handleInputChange}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Aggiungi commento</button>
      </form>
    );
  }
}

export default AddComment;
