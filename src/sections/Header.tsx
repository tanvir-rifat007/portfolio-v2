import ThemeSwitcher from "@/components/ThemeSwitcher";

export const Header = () => {
  return (
    <div className="flex items-center justify-center fixed top-3 w-full z-10 ">
      <ThemeSwitcher />
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a href="" className="nav-item text-text">
          Home
        </a>
        <a href="#projects" className="nav-item text-text">
          Projects
        </a>

        <a href="#" className="nav-item text-text">
          About
        </a>

        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 "
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
