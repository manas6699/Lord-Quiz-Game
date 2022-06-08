import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Welcome to Lord Quiz Game
      </Link>
      
    </div>
  );
};

export default Header;
