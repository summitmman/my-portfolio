import Timeline from "../Timeline";
import TimelineItem from "../Timeline/TimelineItem";
import Section from "./Section";

const Education = () => {
    const eduDetails: {course: string; school: string; batch: string; grade: string;}[] = [
        {
            course: 'Master of Computer Application (M.C.A.)',
            school: 'University of Mumbai',
            batch: 'Batch of 2012-2015',
            grade: 'SGPI: 8.54/10'
        },
        {
            course: 'Bachelor of Science in Information Technology (B.Sc.I.T.)',
            school: 'University of Mumbai',
            batch: 'Batch of 2010-2013',
            grade: 'First class'
        }
    ];
    return (
        <Section title="Education">
            <Timeline className="!ml-2">
                {eduDetails.map((detail, index) => (
                    <TimelineItem key={index}>
                        <div className="heading">{detail.course}</div>
                        <div>{detail.school}</div>
                        <div className="uppercase text-xs font-bold sub-header-text-color">{detail.batch}</div>
                        <div className="uppercase text-xs font-bold sub-header-text-color">{detail.grade}</div>
                    </TimelineItem>
                ))}
            </Timeline>
        </Section>
    );
};

export default Education;