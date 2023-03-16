// import { useSearchParams } from 'react-router-dom';
import Button from './button';

export default function BlogCategories(props) {
    const categories = props.categories;

    
    // const [categoryParams, setCategoryParams] = useSearchParams();

    // const handleCategorySelect = (event) => {
    //     // const category = event.target.value;
    //     console.log("here");

    //     if (category) {
    //         setCategoryParams(category)
    //     } else {
    //         setCategoryParams({});
    //     }

    // }

 

    const categoryButtons = [];
    if(categories !== undefined) {
        for(let i = 0; i < categories.length; i++) {
            categoryButtons.push(
                <Button text={categories[i]} type="b" link={`blog`} key={categories[i] + '1'}/>
            )
        }
        return categoryButtons
    }
    return null;

}