import Logo from "../Logo";
import Options from "./Options";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="bg-[#F5F5F5] flex">
      <div className="mx-auto h-[52px] flex items-center w-[1000px]">
        <Logo />
        <Search />
        <Options />
      </div>
    </nav>
  );
};

export default NavBar;
