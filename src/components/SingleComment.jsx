import React from "react";

function SingleComment({ comment }) {
  return (
    <div className="comment">
      <p>
        <strong>{comment.username}</strong> ({comment.rating}/5):{" "}
        {comment.comment}
      </p>
    </div>
  );
}

export default SingleComment;
