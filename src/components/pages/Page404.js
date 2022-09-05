import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import "./page404.scss";

const Page404 = () => {
  return (
    <div className="errorMessage">
      <ErrorMessage />
      <Link className="backHomeLink" to="/">
        Back to home page
      </Link>
    </div>
  );
};

export default Page404;
