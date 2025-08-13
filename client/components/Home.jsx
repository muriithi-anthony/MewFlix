import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import AnimeCard from "./AnimeCard";

const Home = ({ url = "/" }) => {
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const baseUrl = "http://localhost:5001";

  useEffect(() => {
    const getHome = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}${url}`);
        setHomeData([data.data.data.slider, data.data.data.results]);
      } catch (error) {
        setError(String(error.message));
      } finally {
        setLoading(false);
      }
    };
    getHome();

    console.log(homeData);
  }, [url]);

  return (
    <div>
      <div className="h-full overflow-y-auto p-2 w-screen sm:absolute sm:top-[60px] sm:left-[50px] sm:h-full sm:w-[calc(100vw - 50px)]">
        {loading && (
          <div className="h-full flex items-center justify-center">
            <Loading />
          </div>
        )}
        {error && (
          <div className="h-full flex items-center justify-center">
            <Error error={error} />
          </div>
        )}

        {
          //render lists
        }
      </div>
    </div>
  );
};

export default Home;
