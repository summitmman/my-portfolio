import Section from './Section';
import Timeline from '../Timeline';
import TimelineItem from '../Timeline/TimelineItem';
import WorkExperiencePanel, { IWorkExperience } from '../WorkExperiencePanel';
import { PillVariant } from '../Pill';

const WorkExperience = () => {
    const workEx: IWorkExperience[] = [
        {
            year: 4,
            position: 'Senior Technical Lead',
            company: {
                name: 'Paytm',
                link: 'https://www.paytm.com/'
            },
            startDate: 'Jun 2020',
            endDate: 'Present',
            location: 'Bengaluru, India',
            shortDescription: "Owned frontend of Paytm's Insurance vertical. Architected and migrated from a monolith to a microfrontend, created a no-code framework, component and utility library. Led & mentored a team of developers.",
            description: 'Paytm is a consumer facing payments application in India. It has many verticals like loans, travel, movies, games, mall and insurance. I owned frontend of the insurance vertical as a Senior Technical Lead.',
            details: [
                'Migrated from a monolith to a micro-frontend architecture, built an in-house component and utility library bundled through Vite',
                'Created a JSON driven page builder to create various pages at run-time and a typescript rule engine library. This helped in variety of solutions and AB testing.',
                'Setup a backend for frontend architecture for a no code architecture in React, Typescript and Node-NestJs with MySQL and admin panels in Python-Django for usage by non-technical stakeholders',
                'Improved page load times by 3 seconds for the public facing SPA resulting in better conversion ratio',
                'Managed a team of 10+ developers, which includes scrum planning, UI design review, task assignment, code reviews and mentoring',
            ],
            tech: [
                'React',
                'Vue',
                'Typescript',
                'Node',
                'MySQL',
                {label: 'Redis', variant: PillVariant.Dashed},
                {label: 'Nuxt', variant: PillVariant.Dashed},
                {label: 'Strapi CMS', variant: PillVariant.Dashed},
                {label: 'Rollup', variant: PillVariant.Dashed},
                {label: 'Devops', variant: PillVariant.Dashed},
                {label: 'Bitbucket pipeline', variant: PillVariant.Dashed},
            ],
            showKnowMore: true
        },
        {
            year: 2,
            position: 'Senior Software Engineer',
            company: {
                name: 'Coverfox',
                link: 'https://www.coverfox.com/'
            },
            startDate: 'Dec 2018',
            endDate: 'Jun 2020',
            location: 'Mumbai, India',
            shortDescription: 'Created ULIP insurance product from scratch, AMP SEO pages, an inhouse component-utility library and a dynamic form creator.',
            description: 'Coverfox is an insurance broker which guides consumers and provides a DIY portal to buy and renew insurance. I created the DIY flow to buy ULIP insurance which included rendering dynamic forms for each insurer.',
            details: [
                'Created product frontend such that vastly different desktop and mobile views are served from the same repo.',
                'Created foundation project structure and standardized merge strategies and release processes to cater to dynamic requirements',
                'Created many complex, generic and plug-and-play UI components with UX in mind. Eg: Data tables with infinite scroll, User input field optimized for entering amount with suggestions, etc',
                'Created AMP pages for SEO enabled articles and faster load times',
            ],
            tech: [
                'Vue',
                'Typescript',
                'AMP',
                {label: 'Rollup', variant: PillVariant.Dashed},
                {label: 'Gitlab CI/CD', variant: PillVariant.Dashed},
            ],
            showKnowMore: true
        },
        {
            year: 4,
            position: 'Software Engineer',
            company: {
                name: 'IVP',
                link: 'https://www.ivp.in/'
            },
            startDate: 'Jan 2015',
            endDate: 'Dec 2018',
            location: 'Mumbai, India',
            shortDescription: 'Created multiple be-spoke projects for Hedge Fund firms based in the U.S. These included a security master, PnL benchmarking system, investor portal for dynamic reporting and many more.',
            description: 'Product and service company which caters to the automation of processes and reporting for Hedge Funds majorly in the US. I created multiple be-spoke projects like a security master, PnL benchmarking system, investor portal for dynamic reporting, portfolio management system, document management system, etc.',
            details: [
                'Setup multiple full-stack projects from scratch along with its deployment process',
                'Worked with real-time data like websockets to pull PnL data from bloomberg',
                'Created automated reports in SSRS and setup scheduling using VisualCron',
                'Created desktop applications for internal asset management',
            ],
            tech: [
                'Angular',
                'Typescript',
                'C#',
                'ASP.NET',
                'MSSQL',
                { label: 'SSRS', variant: PillVariant.Dashed },
                { label: 'Tortoise SVN', variant: PillVariant.Dashed },
            ],
            showKnowMore: true
        }
    ];

    return (
        <Section title='Work Experience'>
            <Timeline className="sm:!ml-16 !ml-2">
                {workEx.map((work, index) => (
                    <TimelineItem key={index}>
                        <WorkExperiencePanel data={work} />
                    </TimelineItem>
                ))}
            </Timeline>
        </Section>
    );
}

export default WorkExperience;