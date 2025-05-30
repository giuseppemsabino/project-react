import { Link, useLocation } from "react-router-dom";
import CircularText from "../CircularText";
import GooeyNav from "./NavBar";

// update with your own items
const items = [
  { label: "Home", to: "/" },
  { label: "Galaxies", to: "/galaxies" },
  { label: "Cosmics Phenomena", to: "/phenomena" },
];

export default function Header() {

  const location = useLocation();

  const currentIndex = items.findIndex(item => item.to === location.pathname);
  return (
    <header className="d-flex justify-content-around align-items-center my-3">
      <div className="d-flex justify-content-start">
        <div className="">
          <Link to="/">
            <CircularText
              text="THE*COSMIC*ARCHIVE*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </Link>
        </div>
      </div>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={currentIndex === -1 ? 0 : currentIndex}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </header>
  );
}
