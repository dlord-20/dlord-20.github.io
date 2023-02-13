import { Helmet } from "react-helmet";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const contentStyle = {
    background: 'rgb(33, 150, 243)', 
    color: 'pink'
}

const contentArrowStyle = {
    borderRight: '7px solid  rgb(33, 150, 243)' 
}


export default function TimeLineTest() {

    return (
        <div className="timeline-container">
            <Helmet>
                <title>Timeline Title</title>
            </Helmet>
            <VerticalTimeline
                lineColor={' rgb(33, 150, 243'}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyle}
                    contentArrowStyle={contentArrowStyle}
                    date="2020 - present"
                    dateClassName="timeline-element"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={}
                >
                    <div className="timeline-element">
                        <h3 className="timeline-element">Independent Contractor</h3>
                        <h4 className="">Thuwal, The Kingdom of Saudi Arabia</h4>
                        <p>
                        Start-up branding | Marketing | Design | Website Creation | Email | General Marketing Automation
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Automation Specialist</h3>
                    <h4 className="vertical-timeline-element-subtitle">Thuwal, The Kingdom of Saudi Arabia</h4>
                    <p>
                    Email Automation | Email Campaign | Website Chatbox | Lead Generation | Landing Pages | Webinars.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">Brigham Young University</h4>
                    <p>
                    Business Management
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Collegiate Athlete</h3>
                    <h4 className="vertical-timeline-element-subtitle">Track and Field</h4>
                    <p>
                    Sprinter | 100, 200, 4x1 | Team Captain
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Church Mission</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fresno, California</h4>
                    <p>
                    Need | something | here
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
    );
}
