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
        case 'd':
            buttonType = 'button-d';
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
    if(type === 'd') {
        return (
            <div className='filter-container'>
                <div className='filter'>
                    <h6>Filter</h6>
                </div>
                <div className='button-container'>
                    <Link to={getLink()} >
                        <div className={`button ${buttonType}`}>
                            <div>
                                {text}
                            </div>
                            <div className='button-exit'>
                                {'x'}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
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