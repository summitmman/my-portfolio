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
            shortDescription: 'Owned frontend for entire paytm insurance. Architected a microfrontend and created a no-code framework and component and utility library.',
            description: 'Paytm is a consumer facing payments application in India. It also acts like an aggregator for products such as insurance, ticketing, e-commerce, etc.',
            details: [
                'Joined as a Senior Software Engineer and promoted to Technical Lead and then Senior Technical Lead in 3 years',
                'Architected a loosely coupled group of applications, built an in-house component, utility, JSON driven dynamic form creator and a rule engine library in Vue, Typescript bundled through Vite',
                'Setup a backend for frontend architecture for a no code architecture in React, Typescript and Node-NestJs with MySQL and admin panels in Python-Django for usage by non-technical stakeholders',
                'Decoupled a monolithic repository in order to gain improvements in maintainability, developer experience, resiliency and time to market',
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
                {label: 'Strapi', variant: PillVariant.Dashed},
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
            shortDescription: 'Created ULIP insurance product from scratch along with an inhouse custom component and utility library',
            description: 'Coverfox is an insurance broker which guides consumers and provides a DIY portal to buy and renew insurance',
            details: [
                'Shared ownership of ULIP insurance product frontend along with another lead on desktop and mobile web',
                'Created foundation project structure and standardized merge strategies and release processes to cater to dynamic requirements',
                'Created many complex, generic and plug-and-play UI components with UX in mind. Eg: Data tables with infinite scroll, User input field optimized for entering amount with suggestions, etc',
                'Created AMP pages for SEO and faster load times',
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
            shortDescription: 'Product and service company which caters to the automation of processes and reporting for Hedge Funds majorly in the US.',
            description: 'Product and service company which caters to the automation of processes and reporting for Hedge Funds majorly in the US.',
            details: [
                'Created be-spoke projects for multiple US based Hedge fund firms, including a real-time PnL monitor using websockets',
                'Worked in all aspects of a project from database in MSSQL, backend middleware in .NET Core C# and frontend in Angular with Typescript. Have been a part of the foundation phases of all projects',
                'Created automated reports in SSRS and setup scheduling using VisualCron',
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