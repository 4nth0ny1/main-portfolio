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
  return (
    <div className="navbar sticky top-0 z-50 bg-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case text-black">
          Anthonys Portfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <a onClick={handleHomeClick}>Home</a>
          </li>
          <li>
            <a onClick={handleAboutClick}>About</a>
          </li>
          <li>
            <a onClick={handleProjectClick}>Projects</a>
          </li>
          <li>
            <a onClick={handleContactClick}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
