import { useParams } from "react-router-dom";
import apps from "../../public/data.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const app = apps.find(a => a.id === Number(id));

  if (!app) return <h2 className="text-center mt-10">App not found</h2>;

  const chartData = app.ratings.map(r => ({
    name: r.name,
    value: r.count,
  }));

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* 🔹 Top Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Image */}
        <img
          src={app.image}
          className="w-40 h-40 md:w-52 md:h-52 object-contain bg-gray-100 rounded-xl p-4"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">{app.title}</h1>
          <p className="text-blue-500 text-sm">
            Developed by {app.companyName}
          </p>

          <hr className="my-4" />

          {/* Stats */}
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

          {/* Button */}
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* 🔹 Ratings Chart */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔹 Description */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
