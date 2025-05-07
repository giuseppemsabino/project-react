import { Outlet } from "react-router-dom";
import GooeyNav from "../components/NavBar";
import "../assets/css/navBar.css";
import CircularText from "../components/CircularText";

// update with your own items
const items = [
  { label: "Home", to: "/" },
  { label: "Archive", to: "/galaxies" },
  { label: "Cosmics Phenomena", to: "#" },
];
export default function DefaultLayout() {
  return (
    <div>
      <header className="d-flex justify-content-around align-items-center my-3">
        <div className="d-flex justify-content-start">
          <div className="">
            <CircularText
              text="THE*COSMIC*ARCHIVE*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
        </div>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
