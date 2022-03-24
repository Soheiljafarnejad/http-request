import { useState } from "react";
import "../App.css";
const NewComment = ({ onPost }) => {
  const [comment, setComment] = useState({ name: "", email: "", body: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  return (
    <form className="box newComment" onSubmit={(e) => onPost(e, comment)}>
      <div>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          onChange={changeHandler}
          value={comment.name}
        />
      </div>

      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          id="email"
          onChange={changeHandler}
          value={comment.email}
        />
      </div>

      <div>
        <label htmlFor="body">body:</label>
        <textarea id="body" onChange={changeHandler} value={comment.body} />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default NewComment;
