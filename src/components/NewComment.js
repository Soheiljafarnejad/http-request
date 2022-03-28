import { useState } from "react";
import { postComments } from "../services/httpServices";
import "../App.css";
import { useNavigate } from "react-router-dom";
const NewComment = () => {
  const [comment, setComment] = useState({ name: "", email: "", body: "" });
  const history = useNavigate();
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  const postHandler = (e) => {
    e.preventDefault();
    postComments(comment)
      .then(() => history("/"))
      .catch();
  };

  return (
    <form className="box newComment" onSubmit={postHandler}>
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
