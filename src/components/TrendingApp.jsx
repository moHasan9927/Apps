import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const TrendingApp = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setApps(data));
  }, []);
  console.log(apps);
  const navigate = useNavigate();

  return (
    <div>
      <section className="flex flex-col gap-3 pt-12 sm:pt-16 md:pt-20 px-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Trending Apps
        </h1>

        <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Explore all the trending apps on the market developed by us
        </p>
      </section>
      {/* cards */}
      <section className="p-4 max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {apps.slice(0, 8).map(app => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow p-3 cursor-pointer hover:shadow-lg hover:scale-105 active:scale-100 transition-all"
              onClick={() => navigate(`/app/${app.id}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-32 object-contain bg-gray-100 rounded-md"
              />

              <h2 className="text-sm font-semibold mt-2 line-clamp-2">
                {app.title}
              </h2>

              <div className="flex justify-between mt-2 text-xs">
                <span className="text-green-500 bg-green-100 p-1 rounded-md">
                  ⬇ {app.downloads}
                </span>
                <span className="text-orange-500 bg-orange-100 p-1 rounded-md">
                  ⭐ {app.ratingAvg}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-6 ">
          <button
            onClick={() => navigate("/apps")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default TrendingApp;
