import { 
    Link, 
    useNavigate, 
    useSearchParams 
} from 'react-router-dom';

export default function Button(props) {
    const text = props.text;
    const type = props.type;
    const link = props.link;
    const filter = props.filter;
    let buttonType;
    const navigate = useNavigate();


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

    // Let's figure this baby out --> also needs to change page to the blog page
    const [categoryParams, setCategoryParams] = useSearchParams();


   
    // Need a way to make this dynamic for only blog filters
    const handleCategorySelect = (path, text) => {

        if(filter) {
            const pathName = `/${path.toLowerCase()}`;

            const query = text;
            const category = `?${query.toLowerCase()}`;
            
            navigate({
                pathname: pathName,
                search: category,
            });
        }
    }

    return (
        <div>
        {/* <input type="button" value={text} onClick={handleCategorySelect}/> */}
            <div className='button-container' onClick={() => handleCategorySelect(link, text)}>
                <Link to={`/${link}`} >
                    <div className={`button ${buttonType}`}>
                        {text}
                    </div>
                </Link>
            </div>
        </div>
    );
}