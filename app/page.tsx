import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Education, Introduction, Language, Skills, WorkExperience, Interests, VolunteerExperience, IceBreaker } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="my-container">
        <Banner />
        <Introduction />
        <Skills />
        <WorkExperience />
        <Education />
        <Language />
        <Interests />
        <VolunteerExperience />
        <IceBreaker />
      </main>
      <footer className="my-container text-center text-sm p-10 default-color">
        Built with Next.js and TailwindCSS
      </footer>
    </>
  );
}
