
export default function CustomToolTip({payload, label, active}) {
// Going to need to customize this section to fit the right description depending on the input
const data = [
    {
        name: 'Email', 
        experience: 5, 
        description: "I've handled email campaigns for large companies and set up email automation for serveral small companies."
    }, 
    {
        name: 'Programming', 
        experience: 3, 
        description: "Html, css, and javascript are my main languages that I use to deliver customized content. See more details below"
    },
    {
        name: 'Branding', 
        experience: 3, 
        description: "I've set up branding for multiple small companies including their brand colors and guidelines."
    },
    {
        name: 'Website', 
        experience: 4, 
        description: "Landing Pages, Web Design, and Anayltics. I deliver the content designed for the customer backed numbers."
    },
];
const programmingData = [
    {
        description: "Test"
    },
]

    const getTitle = (label, value) => {
        switch(label) {
            case "Email":
            case "Programming":
            case "Branding":
            case"Website":
                return `${label}: ${value} years of experience`;
            default:
                return `${label}`;
        }
    }

    const getIntroOfPage = (label) => {
        switch(label) {
            case "Email":
                return data[0].description;
            case "Programming":
                return data[1].description;
            case "Branding":
                return data[2].description;
            case "Website":
                return data[3].description;
            case "":
                return programmingData[0].description;
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