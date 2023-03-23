import { 
    Link
} from 'react-router-dom';

export default function Button(props) {
    const {text, type, link} = props;
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

    // THIS NEEDS TO BE DIFFERENT -> Seperate component OR CHANGE CSS TO AN A EXTRA ELEMENT FOR THE 'x'
    if(type === 'd') {
        return (
            <div className='button-container'>
                <Link to={`/${link}`} >
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
        )
    }

    if(type === 'c') {
        return (
            <div className='button-container'>
                <Link to={`/${link}`} >
                    <div className={`button ${buttonType}`}>
                        <div>
                            {text}
                        </div>
                        <div className='button-exit'>
                            {'+'}
                        </div>
                    </div>
                </Link>
            </div>
        )
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