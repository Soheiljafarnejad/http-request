import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/new-comment">new-comment</Link>
      </li>
    </ul>
  );
};

export default Navigation;
