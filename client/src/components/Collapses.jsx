import { FaBars, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenNav } from "../app/features/basicSlice";
import { NavLink } from "react-router-dom";

const navMenus = [
  { href: "", text: "home" },
  { href: "mysql", text: "mysql" },
  { href: "mongodb", text: "mongodb" },
];

export const NavBtn = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenNav());
  };
  return (
    <button
      onClick={handleClick}
      className={`${openNav ? "rotate-180" : ""} text-xl block sm:hidden transition-all duration-150`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};
export const NavLinks = ({ className }) => {
  return navMenus.map((item, i) => (
    <NavLink key={i} to={item.href} className={`${className} capitalize hover:text-cyan-500`}>
      {item.text}
    </NavLink>
  ));
};
NavLinks.propTypes;

export const NavCollapse = () => {
  return <div>NavCollapse</div>;
};
export const NavMain = () => {
  return (
    <div className="w-full hidden sm:flex gap-3">
      <NavLinks />
    </div>
  );
};
