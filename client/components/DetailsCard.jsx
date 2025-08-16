import React from "react";

const DetailsCard = ({ details }) => {
  const metaData = details?.metaData ? details.metaData.split("|") : [];

  const trimmedMetaData = metaData.slice(0, -1);

  console.log(trimmedMetaData);

  return (
    <div>
      <div className="h-full onest-font fixed overflow-y-auto p-2 w-screen sm:absolute sm:top-[60px] sm:left-[50px] sm:h-full sm:w-[calc(100vw - 50px)] sm:pr-[60px] sm:overflow-x-hidden">
        <div className="h-full w-screen flex flex-col gap-4 pr-4">
          <div className="h-[40%] flex gap-2 items-end">
            <img
              className="h-full rounded-md"
              src={details?.info?.poster}
              alt="Poster"
            />
            <div className="flex flex-col gap-4">
              <p className="line-clamp-5">{details?.info?.description}</p>
              <div className="flex flex-col">
                {trimmedMetaData.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            </div>
          </div>
          <iframe
            className="h-[30%] w-full"
            src={details?.info?.streamLink}
            title="Stream"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
