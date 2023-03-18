import { Link, useSearchParams } from 'react-router-dom';

export default function Button(props) {
    const text = props.text;
    const type = props.type;
    const link = props.link;
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

    // Let's figure this baby out --> also needs to change page to the blog page
    const [categoryParams, setCategoryParams] = useSearchParams();

    // const searchTerm = categoryParams.get('Category') || '';

    const handleCategorySelect = (event) => {
        const query = event.target.value;
        const category = query.toLowerCase();

        if (category) {
            setCategoryParams({category})
        } else {
            setCategoryParams({});
        }

    }

    return (
        <div>
        <input type="button" value={text} onClick={handleCategorySelect}/>
            <div className='button-container'>
                <Link to={`/${link}`} >
                    <div className={`button ${buttonType}`}>
                        {text}
                    </div>
                </Link>
            </div>
        </div>
    );
}