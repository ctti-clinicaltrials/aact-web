import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column min-vh-100 container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
