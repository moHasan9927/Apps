import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import apps from "../../public/data.json";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AppContext from "../context/AppContext";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { installedApps, setInstalledApps } = useContext(AppContext);

  const app = apps.find(a => a.id === Number(id));

  useEffect(() => {
    if (!app) {
      navigate("/error");
    }
  }, [app, navigate]);

  if (!app) return null; // prevent crash

  const chartData = app.ratings.map(r => ({
    name: r.name,
    value: r.count,
  }));
  const handleInstall = () => {
    const exists = installedApps.find(a => a.id === app.id);

    if (!exists) {
      setInstalledApps([...installedApps, app]);
    }
  };

  const isInstalled = installedApps.find(a => a.id === app.id);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 md:w-52 md:h-52 object-contain bg-white rounded-xl p-4 shadow"
        />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">{app.title}</h1>

          <p className="text-blue-500 text-sm">
            Developed by {app.companyName}
          </p>

          <hr className="my-4" />

          <div className="flex flex-wrap gap-6 text-center">
            <div>
              <p className="text-green-600 text-xl">⬇</p>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="font-bold">{app.downloads}</p>
            </div>

            <div>
              <p className="text-orange-500 text-xl">⭐</p>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="font-bold">{app.ratingAvg}</p>
            </div>

            <div>
              <p className="text-purple-500 text-xl">👍</p>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="font-bold">{app.reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg cursor-pointer"
          >
            {isInstalled ? "Installed ✅" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
