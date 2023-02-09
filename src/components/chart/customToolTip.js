import { experienceData, programmingData } from "../../data/data";


export default function CustomToolTip({payload, label, active}) {

    const getTitle = (label, value) => {
        switch(label) {
            case "Email":
            case "Programming":
            case "Branding":
            case"Website":
                return `${label}: ${value} years of experience`;
            default:
                return `${label}: ${value}`;
        }
    }

    const getIntroOfPage = (label) => {
        switch(label) {
            case "Email":
                return experienceData[0].description;
            case "Programming":
                return experienceData[1].description;
            case "Branding":
                return experienceData[2].description;
            case "Website":
                return experienceData[3].description;
            case "Html":
                return programmingData[0].description;
            case "Css":
                return programmingData[1].description;
            case "Javascript":
                return programmingData[2].description;
            case "ReactJS":
                return programmingData[3].description;
            case "Git":
                return programmingData[4].description;
            default:
                return `${label} details`;
        }
    }

    if(active) {
        return (
            <div className="tooltip-custom">
                <p className="tooltip-label">{getTitle(label, payload[0].value)}</p>
                <p className="tooltip-intro">{getIntroOfPage(label)}</p>
                {/* <p className="tooltip-desc">{description}</p> */}
            </div>
        );
    }  

    return null;
}