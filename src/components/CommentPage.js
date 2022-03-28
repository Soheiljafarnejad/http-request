import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import { getComments } from "../services/httpServices";
import { useEffect, useState } from "react";
const CommentPage = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await getComments();
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getComment();
  }, []);

  return (
    <div>
      {comments &&
        comments.map((item) => {
          return (
            <Link to={`/comment/${item.id}`} key={item.id}>
              <Comment name={item.name} email={item.email} />
            </Link>
          );
        })}
    </div>
  );
};

export default CommentPage;
