import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const contentStyle = {
    background: '#f9fbf9', 
    color: 'pink'
}

const contentArrowStyle = {
    borderRight: '7px solid  #f9fbf9' 
}


export default function TimeLine() {

    return (
        <div className="timeline-container">

            <VerticalTimeline
                lineColor={'#f9fbf9'}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyle}
                    contentArrowStyle={contentArrowStyle}
                    date="2020 - present"
                    dateClassName="timeline-element"
                    iconStyle={{ background: '#f03a39', color: '#f9fbf9' }}
                    // icon={}
                >
                    <div className="timeline-element">
                        <h3>Independent Contractor</h3>
                        <h4>Thuwal, The Kingdom of Saudi Arabia</h4>
                        <p>Start-up branding | <span className="highlight-word">Marketing</span> | Design | Website Creation | Email | General Marketing Automation</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2020"
                    dateClassName="timeline-element"
                    iconStyle={{ background: '#f03a39', color: '#f9fbf9' }}
                    // icon={<WorkIcon />}
                >
                    <div className="timeline-element">
                        <h3 className="vertical-timeline-element-title">Automation Specialist</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thuwal, The Kingdom of Saudi Arabia</h4>
                        <p>Email Automation | Email Campaign | Website Chatbox | <span className="highlight-word">Lead Generation</span> | Landing Pages | Webinars.</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2019"
                    dateClassName="timeline-element"
                    iconStyle={{ background: '#f03a39', color: '#f9fbf9' }}
                    // icon={<WorkIcon />}
                >
                    <div className="timeline-element">
                        <h3 className="vertical-timeline-element-title">Student</h3>
                        <h4 className="vertical-timeline-element-subtitle">Brigham Young University</h4>
                        <p>Business Management</p>
                    </div>  
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2017"
                    dateClassName="timeline-element"
                    iconStyle={{ background: '#f03a39', color: '#f9fbf9' }}
                    // icon={<WorkIcon />}
                >
                    <div className="timeline-element">
                        <h3 className="vertical-timeline-element-title">Collegiate Athlete</h3>
                        <h4 className="vertical-timeline-element-subtitle">Track and Field</h4>
                        <p>Sprinter | 100, 200, 4x1 | <span className="highlight-word">Team Captain</span></p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2013 - 2025"
                    dateClassName="timeline-element"
                    iconStyle={{ background: '#f03a39', color: '#f9fbf9' }}
                    // icon={<SchoolIcon />}
                >
                    <div className="timeline-element">
                        <h3 className="vertical-timeline-element-title">Church Mission</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fresno, California</h4>
                        <p>Need | something | here</p>
                    </div>
                </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
    );
}
