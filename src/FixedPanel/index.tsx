import "./index.scss";
import { RiMoonLine, RiSunFill } from "react-icons/ri";
import { ThemeCtx } from "../context/ThemeContext";
import { useContext } from "react";

export default function ThemeSwitch() {
  const theme = useContext(ThemeCtx);
  return (
    <div className="fixed right-[0] z-[2] md:mr-[60px]  mr-[15px] mt-[40px]">
      <button className="round-btn" onClick={() => theme?.onSwitch()}>
        {theme?.currentValue === "light" ? (
          <RiMoonLine/>
        ) : (
          <RiSunFill />
        )}
      </button>
    </div>
  );
}
