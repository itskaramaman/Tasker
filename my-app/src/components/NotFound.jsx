import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl mb-5">404 Not Found</h1>
      <Link
        to="/"
        className="border rounded-md border-blue-500 text-blue-500 p-1 hover:bg-blue-500 hover:text-white"
      >
        Go Back
      </Link>
    </main>
  );
};

export default NotFound;
