import "../App.css";

const FullComment = ({ onDelete, comment }) => {
  if (!comment) return <p>Selected ...</p>;
  return (
    <div className="box">
      <p>name: {comment.name}</p>
      <p>email: {comment.email}</p>
      <p>body: {comment.body}</p>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default FullComment;
