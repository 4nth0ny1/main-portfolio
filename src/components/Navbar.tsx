import { useState } from "react";

type NavBarProps = {
  handleProjectClick: () => void;
  handleAboutClick: () => void;
  handleHomeClick: () => void;
  handleContactClick: () => void;
};

export default function Navbar({
  handleProjectClick,
  handleAboutClick,
  handleHomeClick,
  handleContactClick,
}: NavBarProps) {
  const [bgColor, setBgColor] = useState("bg-white");

  const changeBgColor = () => {
    setBgColor("bg-black text-white");
  };

  const revertBgColor = () => {
    setBgColor("bg-white text-black");
  };

  return (
    <div className={`navbar sticky top-0 z-50 ${bgColor}`}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case ">Anthonys Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li onClick={revertBgColor}>
            <a onClick={handleHomeClick}>Home</a>
          </li>
          <li onClick={changeBgColor}>
            <a onClick={handleAboutClick}>About</a>
          </li>
          <li onClick={revertBgColor}>
            <a onClick={handleProjectClick}>Projects</a>
          </li>
          <li onClick={revertBgColor}>
            <a onClick={handleContactClick}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
