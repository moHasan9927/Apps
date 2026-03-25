import React, { useState } from "react";
import { useNavigate } from "react-router";
import apps from "../../public/data.json";

const Apps = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">
        Our All Applications
      </h1>

      <p className="text-center text-gray-400 mb-6">
        Explore All Apps on the Market developed by Us, We deliver for Millions
      </p>

      {/* search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-sm text-gray-500">
          ({filteredApps.length}) Apps Found
        </p>

        <input
          type="text"
          placeholder="Search Apps..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-full md:w-64 outline-none"
        />
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredApps.map(app => (
            <div
              key={app.id}
              onClick={() => navigate(`/app/${app.id}`)}
              className="bg-white rounded-md shadow p-3 cursor-pointer hover:shadow-lg transition-all hover:scale-105 active:scale-100 duration-200"
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
                <span className="text-green-500">⬇ {app.downloads}</span>
                <span className="text-orange-500">⭐ {app.ratingAvg}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <h2 className="text-3xl font-semibold">No Apps Found</h2>
        </div>
      )}
    </div>
  );
};

export default Apps;
