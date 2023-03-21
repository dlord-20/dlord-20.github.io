import { useLocation } from 'react-router';
import Button from '../button';
import { useQuery } from '../../features/customHooks/useQuery';

export default function ActiveBlogCategories(props) {
    const categories = props.categories;

    const query = useQuery().get("category");
    const location = useLocation();

    
    const getActiveLink = (text) => {
        if(query !== null) {
            const queries = query.split(" ");
            let newLink = "";
            // Determines how to delete query from url based on current url
            queries.forEach((name, i) => {
                if(name === text.toLowerCase()) {
                    let search = location.search;
                    if(i === 0 && i === queries.length - 1) {
                        newLink = `blog`;
                    } else if (i === queries.length -1) {
                        newLink = `blog` + search.replace("+" + text.toLowerCase(), "");
                    } else {
                        newLink = `blog` + search.replace(text.toLowerCase() + "+", "");
                    }
                }
            })
            return newLink;
        }
    }


    const categoryButtons = [];
    if(categories !== undefined) {
        for(let i = 0; i < categories.length; i++) {
            categoryButtons.push(
                <Button 
                    text={categories[i]} 
                    type="d" 
                    link={getActiveLink(categories[i].toLowerCase())} 
                    key={categories[i] + '1'} 
                />
            )
        }
    }
    return categoryButtons;
}