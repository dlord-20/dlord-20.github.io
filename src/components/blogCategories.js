// import { useSearchParams } from 'react-router-dom';
import Button from './button';

export default function BlogCategories(props) {
    const categories = props.categories;


    const categoryButtons = [];
    if(categories !== undefined) {
        for(let i = 0; i < categories.length; i++) {
            categoryButtons.push(
                <Button 
                    text={categories[i]} 
                    type="b" 
                    link={`blog`} 
                    key={categories[i] + '1'} 
                    filter={true} 
                    term="category"
                    blogBox={true}
                />
            )
        }
        return categoryButtons;
    }
    return null;

}