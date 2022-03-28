import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullComment from "./components/FullComment";
import NewComment from "./components/NewComment";
import Navigation from "./components/Navigation";
import CommentPage from "./components/CommentPage";

const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<CommentPage />} />
          <Route path="/comment/:id" element={<FullComment />} />
          <Route path="/new-comment" element={<NewComment />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
