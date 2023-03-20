import { act } from 'react-dom/test-utils';
import { blogData } from '../data/blogData';
import { useQuery } from '../features/customHooks/useQuery';
import Button from './button';

export default function GetCategoryFilterButtons() {
    const blogs = blogData;
    // GET SELECTED FILTERS FROM QUERY AND MAKE A LIST
    const active = useQuery().get("category");
    const activeCategories = active.split(" ");
    
    const filters = [];

    console.log(activeCategories);

    // GET ALL CATEGORIES FROM BLOG DATA
    for(let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        for(let j = 0; j < blog.categories.length; j++) {
            const category = blog.categories[j];
            const exists = filters.includes(category);
            if(!exists) {
                filters.push(category);
            }
        }
    }

    const categoryButtons = [];
    if(filters !== undefined) {
        for(let i = 0; i < filters.length; i++) {
            categoryButtons.push(
                <Button text={filters[i]} type="c" link={`blog`} key={filters[i] + '1'} filter={false} term="category"/>
            )
        }
        return categoryButtons;
    }
    return null;

}