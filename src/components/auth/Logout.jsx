import { useNavigate } from "react-router-dom";
import assets from "../../assets";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={assets.icons.logout} alt="Logout" />
    </button>
  );
}
