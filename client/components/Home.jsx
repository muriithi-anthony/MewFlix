import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import CardData from "./CardData";

const Home = ({ url = "/" }) => {
  const [homeData, setHomeData] = useState({ slider: [], results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const baseUrl = "http://localhost:5001";

  useEffect(() => {
    const getHome = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}${url}`);
        setHomeData({
          slider: data.data.data.slider,
          results: data.data.data.results,
        });
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
      <div className="h-full fixed overflow-y-auto p-2 w-screen sm:absolute sm:top-[60px] sm:left-[50px] sm:h-full sm:w-[calc(100vw - 50px)] sm:pr-[60px] sm:overflow-x-hidden">
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
        {!error && !loading && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {
              //  render lists
              homeData.results.map((data, index) => {
                return <CardData key={index} data={data} />;
              })
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
