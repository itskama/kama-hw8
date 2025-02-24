import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowPage from "./pages/ShowPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows/:id" element={<ShowPage />} />
    </Routes>
  </Router>
);

export default App;
