import Home from "../components/Home";

const MoviesHomepage = () => {
  return (
    <div>
      <div
        className={`absolute h-screen w-screen bg-cover bg-center top-0 left-0 -z-10 bg-[url("https://t4.ftcdn.net/jpg/12/48/33/45/360_F_1248334528_hk49yJMuvTjCSJDgJ6wJi64Wxg6tDCVb.jpg")]`}
      ></div>
      <Home url={"/movies"} />
    </div>
  );
};

export default MoviesHomepage;
