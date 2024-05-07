import { NavBtn, NavMain } from "./Collapses";
import { DarkMode } from "./Components";

const Header = () => {
  return (
    <header className="border-b h-16 px-3 lg:px-16">
      <div className="flex justify-between items-center h-full gap-5">
        <div>logo</div>
        <NavMain />
        <div className="flex gap-3 min-w-max">
          <DarkMode />
          <NavBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
