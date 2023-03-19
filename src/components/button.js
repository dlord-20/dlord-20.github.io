import { 
    Link
} from 'react-router-dom';

export default function Button(props) {
    const {text, type, link, filter, term} = props;
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

    const getLink = () => {

        if(!filter) {
            return `/${link}`;
        } else {
            return `/${link}?${term}=${text.toLowerCase()}`;
        }
    }

    return (
        <div>
            <div className='button-container'>
                <Link to={getLink()} >
                    <div className={`button ${buttonType}`}>
                        {text}
                    </div>
                </Link>
            </div>
        </div>
    );
}