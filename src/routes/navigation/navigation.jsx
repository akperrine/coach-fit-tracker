import "./navigation.css";
import { Outlet } from "react-router-dom";
import logoWord from "../../assets/logo-word.png";

const Navigation = () => {
  return (
    <div>
      <nav className="nav">
        <img src={logoWord} className="nav-logo" />
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
