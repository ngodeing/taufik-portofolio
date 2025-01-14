import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-gray-800 text-gray-300 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="mailto:onlytaufik47@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=LPcVDft9Isqt&format=png&color=ffffff"
              alt="Email"
              width={32}
              height={32}
            />
            <span className="text-[12px] md:text-[16px]">Email</span>
          </a>
          <a
            href="https://github.com/ngodeing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff"
              alt="GitHub"
              width={32}
              height={32}
            />
            <span className="text-[12px] md:text-[16px]">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/taufiknurrr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=ffffff"
              alt="LinkedIn"
              width={32}
              height={32}
            />
            <span className="text-[12px] md:text-[16px]">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
