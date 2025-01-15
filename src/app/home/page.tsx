import Image from "next/image";
import NextButton from "../components/NextButton";

export default function Home() {
  return (
    <section id="home" className="text-gray-300 text-center flex lg:flex-row flex-col lg:justify-between gap-20 lg:mt-0 lg:gap-0 justify-start items-center lg:w-[900px] xl:w-[1100px] w-full mx-auto lg:h-[88vh]">
      <div className="container lg:w-[500px] w-full px-8 lg:p-0">
        <h1 className="lg:text-6xl text-4xl font-bold text-start">Hi, I'm Taufik Nurrohman</h1>
        <p className="my-6 lg:text-xl text-md text-start">I am a person with strong skills and interests in web and mobile development. I have the ability to adapt to the environment and am used to working collaboratively in a team to achieve common goals. <br></br><br></br>I am a responsible person and always ready to face new challenges. With a high spirit of learning, I am committed to giving the best contribution in every project that is worked on.</p>
        <div className="flex justify-start lg:gap-4 gap-3 mt-10">
          <NextButton href="project">Projects</NextButton>
          <NextButton href="experience">Experience</NextButton>
          <NextButton href="/pdf/CV_Taufik Nurrohman 2025.pdf">CV</NextButton>
        </div>
      </div>
      <div className="w-[250px] lg:w-[500px]">
        <Image src="/images/photo-profile.png" alt="Taufik Nurrohman" width={500} height={500} />
      </div>
    </section>
  );
}
