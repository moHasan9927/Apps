import { Link } from "react-router-dom";
import errorImg from "../assets/error-404.png"; // 👈 put your image here

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4">
      <img src={errorImg} alt="404" className="w-full max-w-md mb-6" />

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Oops, page not found!
      </h1>

      <p className="text-gray-400 mt-2">
        The page you are looking for is not available.
      </p>

      <Link
        to="/"
        className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-2xl cursor-pointer  transition-all duration-200 hover:scale-105 active:scale-100"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
