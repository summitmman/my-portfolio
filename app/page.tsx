import Banner from "@/components/Banner";
import { Education, Introduction, Language, Skills, WorkExperience, Interests, VolunteerExperience, IceBreaker } from "@/components/Sections";

export default function Home() {
  return (
    <>
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
    </>
  );
}
