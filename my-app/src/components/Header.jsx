import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-blue-400 p-5 text-white">
      <h1 className="text-2xl">
        <Link to="/">Tasker</Link>
      </h1>
      <section className="text-lg">
        <Link to="/completed-task" className="mr-5">
          Completed Tasks
        </Link>
        <Link to="/about">About</Link>
      </section>
    </div>
  );
};

export default Header;
