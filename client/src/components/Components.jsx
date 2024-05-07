import { FaMoon, FaSun } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../app/features/basicSlice";

export const DarkMode = () => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDark());
  };

  return (
    <button onClick={handleClick} className="w-5 h-5 text-xl overflow-hidden">
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
};
