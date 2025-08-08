import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getHome = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/");
        setHomeData(data);
      } catch (error) {
        setError(String(error.message));
      } finally {
        setLoading(false);
      }
    };

    console.log(homeData);

    getHome();
  }, []);

  return (
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

      {!loading && !error && (
        <div className="flex flex-wrap justify-between">
          <ul>
            {homeData.map((data, index) => {
              return (
                <a key={index} href={data.link}>
                  <div
                    style={{ backgroundImage: `url(${data.image})` }}
                    className={`h-[40vw] w-[40vw] bg-cover bg-center`}
                  >
                    <h2>{data.title}</h2>
                    <p>{data.status}</p>
                  </div>
                </a>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
