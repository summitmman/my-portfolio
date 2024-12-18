import Section from './Section';
import WorkExperiencePanel, { IWorkExperience } from '../WorkExperiencePanel';

const VolunteerExperience = () => {
    const workEx: IWorkExperience[] = [
        {
            position: 'Volunteer',
            company: {
                name: 'National Service Scheme (N.S.S.)',
                link: 'https://nss.gov.in/'
            },
            startDate: 'Jan 2010',
            endDate: 'Dec 2012',
            location: 'Mumbai, India',
            description: 'Volunteered in various activities like constructing washrooms for families in villages, Afforestation in and around the city, Event planning for retirement home events, etc.',
        },
        {
            position: 'Swimming Coach',
            company: {
                name: 'Y.M.C.A. Summer Camp',
                link: 'https://ymcabombay.org/procter-branch-byculla-agripada/'
            },
            startDate: 'Jan 2011',
            endDate: 'Dec 2014',
            location: 'Mumbai, India',
            description: 'Taught students between ages 10-18 along with some lifeguarding',
        }
    ];

    return (
        <Section title='Volunteer Experience'>
            {workEx.map((work, index) => (
                <WorkExperiencePanel data={work} key={index} />
            ))}
        </Section>
    );
}

export default VolunteerExperience;