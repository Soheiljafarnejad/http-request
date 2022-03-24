import Comment from "./components/Comment";
import FullComment from "./components/FullComment";
import NewComment from "./components/NewComment";
import {
  getComments,
  deleteComments,
  postComments,
  getOneComments,
} from "./services/httpServices";
import { useEffect, useState } from "react";

const App = () => {
  const [comments, setComments] = useState(null);
  const [selectId, setSelectId] = useState(null);
  const [comment, setComment] = useState(null);

  const selectHandler = (id) => {
    setSelectId(id);
  };

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

  const deleteHandler = async () => {
    try {
      await deleteComments(selectId);
      const response = await getComments();
      setComments(response.data);
      setSelectId(null);
      setComment(null);
    } catch (error) {}
  };

  const postHandler = async (e, comment) => {
    e.preventDefault();

    try {
      await postComments(comment).then(() => {
        return getComments().then((response) => {
          setComments(response.data);
        });
      });
    } catch (error) {}
  };

  // fullComments
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

  return (
    <section className="app">
      <div>
        <h2>Comment</h2>
        {comments ? (
          comments.map((item) => {
            return (
              <Comment
                key={item.id}
                name={item.name}
                email={item.email}
                onClick={() => selectHandler(item.id)}
              />
            );
          })
        ) : (
          <p>Lodging ...</p>
        )}
      </div>
      <div>
        <h2>Full Comment</h2>
        <FullComment
          selectId={selectId}
          onDelete={deleteHandler}
          comment={comment}
          setComment={setComment}
        />
      </div>
      <div>
        <h2>New Comment</h2>
        <NewComment onPost={postHandler} />
      </div>
    </section>
  );
};

export default App;
