import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="display-4 fw-bold">
          Hackathon Team Management System
        </h1>

        <p className="lead mt-3">
          Register for Hackathon and View All Registered Teams.
        </p>

        <div className="mt-4">

          <Link
            to="/add-team"
            className="btn btn-primary me-3"
          >
            Add Team
          </Link>

          <Link
            to="/view-all"
            className="btn btn-success"
          >
            View Teams
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;