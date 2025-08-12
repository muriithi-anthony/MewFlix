import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MoviesHomepage from "../pages/MoviesHomepage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesHomepage />} />
        <Route />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
