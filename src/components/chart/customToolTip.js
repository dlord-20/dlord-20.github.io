
export default function CustomToolTip({payload, label, active}) {
// Going to need to customize this section to fit the right description depending on the input
    const getIntroOfPage = (label) => {
        return `${label} details`;
    }

    if(active) {
        return (
            <div className="tooltip-custom">
                <p className="tooltip-label">{`${label} : ${payload[0].value}`}</p>
                <p className="tooltip-intro">{getIntroOfPage(label)}</p>
                {/* <p className="tooltip-desc">{description}</p> */}
            </div>
        );
    }  

    return null;
}