const Home = (req, res) => {
  res.status(200).json({
    message: "Home endpoint",
  });
};

export default Home;
