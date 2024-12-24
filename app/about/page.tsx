import Profile from "@/components/Profile";
import { Education, IceBreaker, Interests, Language, Skills, VolunteerExperience } from "@/components/Sections";

const About = () => {
    return (
        <main className="my-container flex flex-col-reverse sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="col-span-2">
                <section className="mt-8">
                    <h2 className={`header-text-size`}>I design and develop scalable solutions</h2>
                    <p>
                        I am Sumit Man, a seasoned Full-Stack Developer and Senior Technical Lead. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro aliquam in quasi incidunt. Quibusdam officia, magni at dolore qui accusamus voluptate deserunt, repudiandae doloribus quas quod! Sequi, fuga blanditiis praesentium minima eos excepturi possimus nobis laboriosam ratione dicta asperiores vitae ab numquam facere est magni explicabo? Qui minus eum voluptas temporibus alias, ullam sed aliquam voluptate officiis excepturi enim, amet, ipsam iure nulla fugit ipsum officia itaque rerum a accusamus praesentium dignissimos doloribus? Consectetur, cupiditate earum. Hic, natus exercitationem. Eum officiis nobis perspiciatis repellat molestiae perferendis ipsum, commodi et deleniti fugit laborum distinctio iure optio. Maiores eum amet voluptates in fugit tempore quod nulla quia placeat reprehenderit sapiente aspernatur minima doloremque sit, vero voluptate sint exercitationem quae impedit eius itaque autem explicabo deleniti? Perspiciatis, impedit dicta laudantium deleniti molestiae quis obcaecati officia ea dolorum aliquid illo amet corrupti.
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