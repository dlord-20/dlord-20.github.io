import { 
    Link, useLocation
} from 'react-router-dom';
import { useQuery } from '../features/customHooks/useQuery';

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
    const query = useQuery().get(term);
    const location = useLocation();
    console.log(location.search);

    const getLink = () => {

        if(query !== null) {
            const queries = query.split(" ");
            // console.log(queries);
            let newLink = "";
            queries.forEach((name, i) => {
                if(name === text.toLowerCase()) {
                    let search = location.search;
                    if(i === 0 && i === queries.length - 1) {
                        // console.log('link:')
                        // console.log(`/${link}`);
                        newLink = `/${link}`;
                    } else if (i === queries.length -1) {
                        // console.log('2nd');
                        // console.log(text);
                        // console.log(`/${link}` + search.replace("+" + text.toLowerCase(), ""));
                        newLink = `/${link}` + search.replace("+" + text.toLowerCase(), "");
                    } else {
                        // console.log('3rd');
                        // console.log(text);
                        // console.log(`/${link}` + search.replace(text.toLowerCase() + "+", ""));
                        newLink = `/${link}` + search.replace(text.toLowerCase() + "+", "");
                    }
                }
                
            })
            if(!newLink) {
                console.log("one");
                if(!location.search) {
                    newLink = `/${link}?${term}=${text.toLowerCase()}`;
                } else {
                    newLink = `${location.search}+${text.toLowerCase()}`;
                }
            }
            // console.log(newLink);
            return newLink;
        }

        if(!filter && query === null) {
            return `/${link}`;
        } else {
            // console.log('else');
            return `/${link}?${term}=${text.toLowerCase()}`;
        }
    }
    // THIS NEEDS TO BE DIFFERENT -> Seperate component
    if(type === 'd') {
        return (
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