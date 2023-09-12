import { useState } from "react";

type NavBarProps = {
  handleProjectClick: () => void;
  handleAboutClick: () => void;
  handleHomeClick: () => void;
  handleContactClick: () => void;
};

export default function ResponsiveNavbar({
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
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-gray-400 p-2 shadow"
          >
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
        <a className="btn btn-ghost text-xl normal-case">Anthonys Portfolio</a>
      </div>
      <div
        className={`navbar sticky top-0 z-50 ${bgColor} hidden lg:flex lg:justify-end`}
      >
        <ul className="menu menu-horizontal px-1">
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
