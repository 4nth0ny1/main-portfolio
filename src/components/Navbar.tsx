type NavBarProps = {
  handleProjectClick: () => void;
  handleAboutClick: () => void;
};

export default function Navbar({
  handleProjectClick,
  handleAboutClick,
}: NavBarProps) {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case text-black">
          Anthonys Portfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a onClick={handleAboutClick}>About</a>
          </li>
          <li>
            <a onClick={handleProjectClick}>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
