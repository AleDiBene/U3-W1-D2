import React from "react";
import SingleComment from "./SingleComment";

function CommentsList({ comments }) {
  return (
    <div>
      <h4>Lista dei commenti:</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <SingleComment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
