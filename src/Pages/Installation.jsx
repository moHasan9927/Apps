import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

const Installation = () => {
  const { installedApps, setInstalledApps } = useContext(AppContext);
  const [sortType, setSortType] = useState("");

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortType === "low") return a.size - b.size;
    if (sortType === "high") return b.size - a.size;
    return 0;
  });

  const handleUninstall = id => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>

      <p className="text-center text-gray-400 mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-sm text-gray-500">
          {installedApps.length} Apps Found
        </p>

        <select
          onChange={e => setSortType(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="">Sort By</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {sortedApps.length > 0 ? (
          sortedApps.map(app => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-12 h-12 object-contain bg-white rounded"
                />

                <div>
                  <h2 className="font-semibold text-sm">{app.title}</h2>

                  <div className="flex gap-4 text-xs mt-1">
                    <span className="text-green-500">⬇ {app.downloads}</span>
                    <span className="text-orange-500">⭐ {app.ratingAvg}</span>
                    <span className="text-gray-500">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer hover:scale-105 active:scale-100 transition-all hover:shadow-xl"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-10">No Installed Apps</p>
        )}
      </div>
    </div>
  );
};

export default Installation;
