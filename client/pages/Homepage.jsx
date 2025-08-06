import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
};

export default Homepage;
