import { useNavigate } from "react-router-dom";
import assets from "../../assets";
import { useAuth } from "../../hooks";

export default function Logout() {
  const navigate = useNavigate();
  const { onAuth } = useAuth();

  const handleLogout = () => {
    onAuth({
      user: null,
      authToken: "",
      refreshToken: "",
    });
    navigate("/login");
  };

  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={assets.icons.logout} alt="Logout" />
    </button>
  );
}
