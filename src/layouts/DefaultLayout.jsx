import { Link, Outlet } from "react-router-dom";
import GooeyNav from "../components/layout/NavBar";
import "../assets/css/navBar.css";
import CircularText from "../components/CircularText";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
