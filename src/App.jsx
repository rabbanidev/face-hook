import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="me" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
