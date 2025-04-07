import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [], // Stato per memorizzare i commenti
    loading: true, // Stato per gestire il caricamento
    error: null, // Stato per gli errori
  };

  // Effettuare la fetch dei commenti quando il componente viene montato
  async componentDidMount() {
    const { bookId } = this.props; // Prendiamo l'ID del libro dalla props

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZTUwNjI4Y2E0YzAwMTU1MDE4YzYiLCJpYXQiOjE3NDQwMzcxMjYsImV4cCI6MTc0NTI0NjcyNn0.qzJg4sorisfVv4cSrGAiOsc0rAv8mYmR5g0UyLBl9YY",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Errore nel fetch dei commenti");
      }
      const data = await response.json();
      this.setState({
        comments: data, // Aggiorna lo stato con i commenti
        loading: false, // Caricamento completato
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message, // Gestione degli errori
      });
    }
  }

  // Metodo per aggiungere un nuovo commento (aggiorna lo stato)
  addNewComment = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment], // Aggiungi il nuovo commento
    }));
  };

  render() {
    const { comments, loading, error } = this.state;

    if (loading) {
      return <p>Caricamento commenti...</p>;
    }

    if (error) {
      return <p>Errore: {error}</p>;
    }

    return (
      <div>
        <CommentsList comments={comments} />
        <AddComment
          bookId={this.props.bookId}
          onNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default CommentArea;
