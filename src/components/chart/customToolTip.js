
export default function CustomToolTip({payload, label, active}) {
    const getIntroOfPage = (label) => {
        return label;
    }

    if(active) {
        return (
            <div className="tooltip-custom">
                <p className="tooltip-label">{`${label} : ${payload[0].value}`}</p>
                <p className="tooltip-intro">{getIntroOfPage(label)}</p>
                <p className="tooltip-desc">Anything you want can be displayed here.</p>
            </div>
        );
    }  

    return null;
}