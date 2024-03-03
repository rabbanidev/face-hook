import { Link } from "react-router-dom";
import assets from "../../assets";
import Logout from "../auth/Logout";
import { useAuth } from "../../hooks";
import { getImageUrl } from "../../utils";

export default function Header() {
  const { auth } = useAuth();
  const { firstName, lastName, avatar } = auth?.user || {};
  const fullName = firstName + " " + lastName;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img
            className="max-w-[100px] rounded-full lg:max-w-[130px]"
            src={assets.images.logo}
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={assets.icons.home} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={assets.icons.notification} alt="Notification" />
          </button>

          <Logout />

          <Link to="/me" className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">{fullName}</span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
              src={getImageUrl(avatar)}
              alt={fullName}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
