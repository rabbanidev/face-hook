import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";
import Header from "../components/common/Header";
import { ProfileProvider } from "../providers";

export default function PrivateRoute() {
  const { auth } = useAuth();

  return auth.user ? (
    <ProfileProvider>
      <Header />
      <main className="mx-auto max-w-[1020px] py-8">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </ProfileProvider>
  ) : (
    <Navigate to="/login" />
  );
}
