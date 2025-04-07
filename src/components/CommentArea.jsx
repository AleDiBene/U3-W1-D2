import React, { Component } from "react";
import CommentsList from "./CommentsList"; // Importiamo CommentsList
import AddComment from "./AddComment"; // Importiamo AddComment

class CommentArea extends Component {
  state = {
    comments: [],
  };

  // Metodo che si attiva quando cambia il bookAsin
  componentDidUpdate(prevProps) {
    if (this.props.bookAsin !== prevProps.bookAsin) {
      this.fetchComments();
    }
  }

  // Metodo per fare il fetch dei commenti
  fetchComments = async () => {
    const { bookAsin } = this.props;
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZTUwNjI4Y2E0YzAwMTU1MDE4YzYiLCJpYXQiOjE3NDQwMzcxMjYsImV4cCI6MTc0NTI0NjcyNn0.qzJg4sorisfVv4cSrGAiOsc0rAv8mYmR5g0UyLBl9YY", // Sostituisci con il tuo token
          },
        }
      );
      const data = await response.json();
      this.setState({ comments: data }); // Salviamo i commenti nello stato
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h3>Recensioni</h3>
        <CommentsList comments={comments} />{" "}
        {/* Passiamo i commenti a CommentsList */}
        <AddComment bookAsin={this.props.bookAsin} />{" "}
        {/* Passiamo bookAsin a AddComment */}
      </div>
    );
  }
}

export default CommentArea;
