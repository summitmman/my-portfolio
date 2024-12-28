import Profile from "@/components/Profile";
import { Education, IceBreaker, Interests, Language, Skills, VolunteerExperience } from "@/components/Sections";
import styles from './page.module.css';

const About = () => {
    return (
        <main className="my-container flex flex-col-reverse sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="col-span-2">
                <section className="mt-6">
                    <h2 className={`header-text-size`}>I design & develop customizable solutions</h2>
                    <p>
                        I am Sumit Man, a seasoned software developer and a Senior Technical Lead in Paytm (my last organization).
                        I have been frontend-heavy and have always worked with cutting edge technology. I was fortunate to work with most popular technologies like React, Vue and Angular on a professional level.
                        That said, I have also worked on the backend, creating apis in rest and graphql, managing database and have solved for the big picture.
                        I have solved complex requirements, product and operational, with technology. A runtime JSON page builder has been such a solution.
                    </p>
                    <p className="mt-4">
                        I love creating reusable solutions which can be used by other developers. I always had an interest in user experience but now developer experience also intrigues me.
                        I believe not all problems have the same solution and hence do not force a solution. Through the years of experience I have understood that maintainability comes first. A great solution might not be maintainable and may harm the project in the future.
                    </p>
                    <p className="mt-4">
                        In my spare time, I usually go for walks, swim, sketch and hangout with my wife and two cats having deep conversations <span className={`sm:shimmer ${styles.cursorCat}`}>(yes, the cats listen in)</span>.
                    </p>
                </section>
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