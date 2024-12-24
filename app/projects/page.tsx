import Pill from "@/components/Pill";
import { FaNpm } from 'react-icons/fa6';
import { SiStackblitz } from 'react-icons/si';
import styles from './page.module.css';

const Projects = () => {
    const projects = [
        {
            image: <FaNpm />,
            title: 'Vue Page Craft',
            link: 'https://www.npmjs.com/package/vue-page-craft?activeTab=readme',
            description: 'Build any page with moderate amount of reactivity on the fly using JSON.',
            technologies: ['Vue 3', 'Typescript', 'Vite'],
            demoLink: 'https://summitmman.github.io/vue-page-craft/'
        },
        {
            image: <SiStackblitz />,
            title: 'Typescript Rule Engine',
            link: 'https://stackblitz.com/edit/typescript-ifb48m?file=index.ts',
            description: 'A simple Open-Close typescript rule engine with JSON rules',
            technologies: ['Typescript', 'Vite'],
            demoLink: 'https://stackblitz.com/edit/typescript-ifb48m?embed=1&file=index.ts'
        }
    ];
    return (
        <main className="my-container">
            <section className="mt-8">
                <h2 className={`header-text-size`}>Projects</h2>
                <p>Below are some utilities and libraries I have created on my personal time. They are open source, so feel free to contribute if it seems interesting.</p>
                <div>
                    {projects.map(project => (
                        <div className="sm:flex sm:gap-8 mt-10" key={project.title}>
                            <div><span className={styles.projectIcon}>{project.image}</span></div>
                            <div className="w-full">
                                <div className="title">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="arrow-link font-bold"
                                    >{project.title}</a>
                                </div>
                                <div className="description">
                                    {project.description}
                                </div>
                                <div className="pill-container text-xs">
                                    {project.technologies.map(tech => <Pill>{tech}</Pill>)}
                                </div>
                                {project.demoLink && (
                                    <div className="mt-4">
                                        <iframe className="w-full h-96" src={project.demoLink} frameBorder="0"></iframe>
                                        <a href={project.demoLink} target="_blank" className="arrow-link text-xs mt-4 mb-2">Visit demo site</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;