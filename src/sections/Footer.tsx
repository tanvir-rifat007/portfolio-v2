import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const LINKS = [
  {
    name: "Github",
    url: "#",
  },
  {
    name: "Facebook",
    url: "#",
  },
  {
    name: "Instagram",
    url: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center">
            Tanvir Rifat | &copy; {new Date().getFullYear()} All rights
            reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.name}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
