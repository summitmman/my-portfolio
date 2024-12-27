import Pill, { PillType } from "@/components/Pill";
import styles from './page.module.css';
import { FaCalendar, FaBookOpenReader, FaTags } from 'react-icons/fa6';
import Image from 'next/image';

const Blog = () => {
    const projects = [
        {
            image: '/gitBranchingStrategy.webp',
            title: 'Git branching strategy for dynamic production releases',
            link: 'https://medium.com/dev-genius/git-branching-strategy-for-dynamic-production-releases-fab47e7da4ce',
            description: 'Frequently changing feature deployment plans can be manageable using a branching strategy...',
            publishDate: 'Feb 6, 2023',
            readTime: '7',
            tags: ['Git', 'Deployment']
        },
        {
            image: '/security.jpg',
            title: 'Managing ‘unsafe-eval’ and ‘unsafe-inline’ of Content-Security-Policy (CSP) for frontend SPA',
            link: 'https://medium.com/dev-genius/managing-unsafe-eval-and-unsafe-inline-of-content-security-policy-csp-for-frontend-spa-99752762aa53',
            description: 'Most articles suggest bypassing unsafe-eval & unsafe-inline instead of solving them...',
            publishDate: 'Feb 3, 2023',
            readTime: '8',
            tags: ['CSP', 'Security', 'SPA', 'Frontend']
        },
        {
            image: '/ruleEngine.webp',
            title: 'A simple open-close typescript rule engine with JSON rules',
            link: 'https://medium.com/@summitmman/a-simple-open-close-typescript-rule-engine-with-json-rules-7ee57f64115c',
            description: 'Write rules in JSON and add custom conditions to the rule engine with typescript support...',
            publishDate: 'Sep 16, 2023',
            readTime: '4',
            tags: ['Typescript', 'JSON', 'Open-Close']
        },
        {
            image: '/inheritance.webp',
            title: 'Override component behaviour in Vue 3 Composition api',
            link: 'https://medium.com/dev-genius/override-component-behaviour-in-vue-3-composition-api-7313abff6e89',
            description: 'Override behaviour of Vue components with inheritance in Vue 3...',
            publishDate: 'Jul 3, 2023',
            readTime: '11',
            tags: ['Inheritance', 'Vue 3', 'Composition API']
        },
        {
            image: '/why.webp',
            title: 'Why did React choose the functional programming approach?',
            link: 'https://medium.com/@summitmman/why-are-react-function-components-and-hooks-the-way-they-are-0e3cdab86839',
            description: 'For me it seems like a bold step to tell developers to adopt functional programming...',
            publishDate: 'Jul 18, 2024',
            readTime: '6',
            tags: ['React', 'Functional Programming']
        },
        {
            image: '/conspiracy.webp',
            title: 'Closures-this-arrowFunctions it’s all connected!! : A conspiracy theory — Part 1',
            link: 'https://medium.com/@summitmman/closures-this-arrowfunctions-its-all-connected-a-conspiracy-theory-part-1-c4db1053c6a2',
            description: "How closures might work, maybe 'this' is a closure, thats probably why 'this' doesnt work in arrow fn...",
            publishDate: 'May 22, 2024',
            readTime: '6',
            tags: ['Javascript']
        },
        
    ];
    // fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@summitmman')
    //     .then(response => response.body).then(response => console.log(response));


    return (
        <main className="my-container">
            <section className="mt-6">
                <h2 className={`header-text-size`}>Blog</h2>
                <p>I often write technical blogs where I try to explain concepts with a different perspective, share my learnings and help others create utilies on their own. Below are some of my notable blogs. To read all of them follow me on <a className="arrow-link" href="https://medium.com/@summitmman">Medium</a></p>
                <div>
                    {projects.map(project => (
                        <div className="sm:flex sm:gap-8 mt-14" key={project.title}>
                            <div>
                                <a href={project.link} target="_blank">
                                    <Image src={project.image} width={700} height={451} alt="blog image" className={styles.projectIcon} />
                                </a>
                            </div>
                            <div className="w-full sm:relative flex flex-col justify-between">
                                <div>
                                    <div className="title mt-2">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="header-font font-bold"
                                        >{project.title}</a>
                                    </div>
                                    <div className="description">
                                        {project.description}
                                    </div>
                                    {project.tags?.length && <div className="text-xs sm:flex sm:gap-4 mt-1">
                                        <div className="pill-container">
                                            <FaTags className="inline-block text-sm" />
                                            {project.tags.map(tag => <Pill type={PillType.Primary} key={tag}>{tag}</Pill>)}
                                        </div>
                                    </div>}
                                </div>
                                <div className="text-sm sm:flex sm:gap-4 mt-1 opacity-60">
                                    <div><FaCalendar className="inline-block align-text-top" /> Published on {project.publishDate}</div>
                                    <div><FaBookOpenReader className="inline-block align-text-top" /> {project.readTime} min read</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Blog;