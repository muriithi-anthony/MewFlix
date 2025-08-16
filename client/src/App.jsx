import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MoviesHomepage from "../pages/MoviesHomepage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DetailsPage from "../pages/DetailsPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path={"/" || "/anime"} element={<Homepage />} />
        <Route path="/movies" element={<MoviesHomepage />} />
        <Route path="/movies/:id" element={<DetailsPage category="movies" />} />
        <Route />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
