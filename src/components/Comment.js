import "../App.css";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className="box pointer" onClick={onClick}>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Comment;
