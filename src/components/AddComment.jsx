import React, { useState } from "react";

function AddComment({ bookAsin }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      text,
      rating,
      bookAsin,
    };

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzZTUwNjI4Y2E0YzAwMTU1MDE4YzYiLCJpYXQiOjE3NDQwMzcxMjYsImV4cCI6MTc0NTI0NjcyNn0.qzJg4sorisfVv4cSrGAiOsc0rAv8mYmR5g0UyLBl9YY", // Sostituisci con il tuo token
          },
          body: JSON.stringify(newComment),
        }
      );
      const data = await response.json();
      console.log("Commento aggiunto:", data);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Aggiungi un commento"
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default AddComment;
