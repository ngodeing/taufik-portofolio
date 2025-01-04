import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { name: "Project", href: "/project" },
    { name: "Skill", href: "/skill" },
    { name: "Achievement", href: "/achievement" },
    { name: "Experience", href: "/experience" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/home" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dhf1recqk/image/upload/v1721361313/usmasmat8xyajcmi5uiy.png"
            alt="Logo Taufik Nurrohman"
            width={40}
            height={40}
          />
        </Link>

        <ul className="flex">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group min-w-[100px] text-center">
              <Link
                href={item.href}
                className="block py-6 px-6 box-border transition-all font-bold"
              >
                {item.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 group-hover:w-full transition-all"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
