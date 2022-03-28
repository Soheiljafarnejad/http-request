import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import { deleteComments, getOneComments } from "../services/httpServices";

const FullComment = () => {
  const [comment, setComment] = useState(null);

  const params = useParams();
  const selectId = params.id;

  const history = useNavigate();

  const deleteHandler = () => {
    deleteComments(selectId)
      .then(() => history("/"))
      .catch();
  };

  useEffect(() => {
    if (selectId) {
      const getSelectComment = async () => {
        await getOneComments(selectId)
          .then((response) => {
            setComment(response.data);
          })
          .catch();
      };
      getSelectComment();
    }
  }, [selectId]);

  if (!comment) return <p style={{ "textAlign": "center" }}>loading...</p>;
  return (
    <div className="box">
      <p>name: {comment.name}</p>
      <p>email: {comment.email}</p>
      <p>body: {comment.body}</p>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default FullComment;
