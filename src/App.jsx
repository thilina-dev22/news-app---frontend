import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
