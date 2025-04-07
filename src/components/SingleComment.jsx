import React from "react";

function SingleComment({ comment }) {
  return (
    <div>
      <h5>{comment.author}</h5>
      <p>{comment.text}</p>
      <p>Voto: {comment.rating}</p>
    </div>
  );
}

export default SingleComment;
