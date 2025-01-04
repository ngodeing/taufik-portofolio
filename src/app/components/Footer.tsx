import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-gray-800 text-gray-300 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:onlytaufik47@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://img.icons8.com/?size=100&id=LPcVDft9Isqt&format=png&color=ffffff" // Email icon URL
              alt="Email"
              width={32}
              height={32}
              className="hover:opacity-75 transition-opacity"
            />
          </a>
          <a href="https://github.com/ngodeing" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff" // GitHub icon URL
              alt="GitHub"
              width={32}
              height={32}
              className="hover:opacity-75 transition-opacity"
            />
          </a>
          <a href="https://www.linkedin.com/in/taufiknurrr" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=ffffff" // LinkedIn icon URL
              alt="LinkedIn"
              width={32}
              height={32}
              className="hover:opacity-75 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
