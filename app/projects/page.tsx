import Pill, { PillType } from "@/components/Pill";
import { FaNpm } from 'react-icons/fa6';
import { SiStackblitz } from 'react-icons/si';
import styles from './page.module.css';

const Projects = () => {
    const projects = [
        {
            image: <FaNpm />,
            title: 'Vue Page Craft',
            link: 'https://www.npmjs.com/package/vue-page-craft?activeTab=readme',
            description: 'Build any page with a moderate amount of reactivity, on the fly, using JSON. You can use native html elements, custom components or components from any component library. v-model, v-if and v-for are also supported.',
            technologies: ['Vue 3', 'Typescript', 'Vite'],
            demoLink: 'https://summitmman.github.io/vue-page-craft/'
        },
        {
            image: <SiStackblitz />,
            title: 'Typescript Rule Engine',
            link: 'https://stackblitz.com/edit/typescript-ifb48m?file=index.ts',
            description: 'A simple Open-Close typescript rule engine with JSON rules. You can add custom conditions and extend the rule engine as needed.',
            technologies: ['Typescript', 'Vite'],
            demoLink: 'https://stackblitz.com/edit/typescript-ifb48m?embed=1&file=index.ts&view=preview&hideNavigation=1'
        },
        {
            image: <SiStackblitz />,
            title: 'Custom Frontend framework',
            link: 'https://stackblitz.com/edit/typescript-yqlgc8?file=index.ts',
            description: 'Simple recreation of the Vue framework with basic reactivity',
            technologies: ['Typescript', 'Vite'],
            demoLink: 'https://stackblitz.com/edit/typescript-yqlgc8?embed=1&file=index.ts&view=preview&hideNavigation=1'
        }
    ];
    return (
        <main className="my-container">
            <section className="mt-6">
                <h2 className={`header-text-size`}>Projects</h2>
                <p>Below are some utilities and libraries I have created on my personal time. They are open source, so feel free to contribute if they seem interesting.</p>
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
                                    {project.technologies.map(tech => <Pill type={PillType.Default} key={tech}>{tech}</Pill>)}
                                </div>
                                {project.demoLink && (
                                    <div className="mt-4">
                                        <iframe className="w-full h-96 grayscale rounded-md" src={project.demoLink} frameBorder="0"></iframe>
                                        <a href={project.demoLink} target="_blank" className="arrow-link text-xs !mt-3 mb-2">Visit demo site</a>
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