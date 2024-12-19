import Profile from "@/components/Profile";
import { Education, IceBreaker, Interests, Introduction, Language, Skills, VolunteerExperience } from "@/components/Sections";

const About = () => {
    return (
        <main className="my-container flex flex-col-reverse sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="col-span-2">
                <Introduction />
                <IceBreaker />
                <Skills />
                <Education />
                <Language />
                <Interests />
                <VolunteerExperience />
            </div>
            <div className="">
                <Profile />
            </div>
        </main>
    );
};

export default About;