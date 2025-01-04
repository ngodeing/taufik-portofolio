import Image from "next/image";
import NextButton from "../components/NextButton";

export default function Home() {
  return (
    <section id="home" className="text-gray-300 text-center flex lg:flex-row flex-col lg:justify-between gap-20 lg:mt-0 lg:gap-0 justify-start items-center lg:w-[900px] xl:w-[1100px] w-full mx-auto lg:h-[88vh]">
      <div className="container lg:w-[500px] w-full px-8 lg:p-0">
        <h1 className="lg:text-6xl text-4xl font-bold text-start">Hi, I'm Taufik Nurrohman</h1>
        <p className="my-6 lg:text-xl text-md text-start">I'm a Expert Front-end developer skilled in various technologies. Check out my projects and experiences below.</p>
        <div className="flex justify-start lg:gap-4 gap-3 mt-10">
          <NextButton href="project">Projects</NextButton>
          <NextButton href="experience">Experience</NextButton>
        </div>
      </div>
      <div className="w-[200px] lg:w-[400px]">
        <Image src="/images/gdsc1.png" alt="Taufik Nurrohman" width={400} height={400} />
      </div>
    </section>
  );
}
