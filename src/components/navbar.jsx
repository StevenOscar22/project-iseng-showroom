import { Link } from "react-scroll";
import Hamburger from "./hamburgerMenu";

const Navbar = () => {
  return (
    <>
      <header className="logo bg-gray-200 p-3">
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-center font-[Poppins]">Corvette Garage</h1>
          <Hamburger />
        <nav>
          <Link to="cars" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Cars</Link>
            <Link to="history" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">History</Link>
            <Link to="technology" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Technology</Link>
            <Link to="production" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Production</Link>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
