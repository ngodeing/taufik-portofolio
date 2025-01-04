import Link from "next/link";

export default function NextButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <span className="shadow-md hover:bg-yellow-400 hover:text-gray-900 text-gray-300 font-semibold lg:py-4 lg:px-8 py-2 px-4 rounded-full lg:text-xl text-md border-2 border-yellow-400 text-center">
        {children}
      </span>
    </Link>
  );
}
