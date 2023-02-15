import { Link } from 'react-router-dom';

export default function Button(props) {
    const text = props.text;
    const type = props.type;
    const link = props.link
    let buttonType;

    switch(type) {
        case 'a':
            buttonType = 'button-a';
            break;
        case 'b':
            buttonType = 'button-b';
            break;
        case 'c':
            buttonType = 'button-c';
            break;
        default:
            buttonType = "button-a";
    }

    return (
        <div className='button-container'>
            <Link to={`/${link}`} >
                <div className={`button ${buttonType}`}>
                    {text}
                </div>
            </Link>
        </div>
    );
}