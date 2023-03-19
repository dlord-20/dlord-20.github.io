// import { useSearchParams } from 'react-router-dom';
import Button from './button';

export default function ActiveBlogCategories(props) {
    const categories = props.categories;


    const categoryButtons = [];
    if(categories !== undefined) {
        for(let i = 0; i < categories.length; i++) {
            categoryButtons.push(
                <Button text={categories[i]} type="d" link={`blog`} key={categories[i] + '1'} filter={false} term="category"/>
            )
        }
        return categoryButtons;
    }
    return null;

}