import { act } from 'react-dom/test-utils';
import { blogData } from '../data/blogData';
import { useQuery } from '../features/customHooks/useQuery';
import Button from './button';

export default function GetCategoryFilterButtons() {
    const blogs = blogData;
    // GET SELECTED FILTERS FROM QUERY AND MAKE A LIST
    const active = useQuery().get("category");
    const serperatedActiveCategories = active.split(" ");

    // Make first letter in each word in active category inactiveFilters captial
    const activeFilters = [];
    serperatedActiveCategories.forEach(category => {
        activeFilters.push(category.charAt(0).toUpperCase() + category.slice(1));
    });


    const inactiveFilters = [];

    // GET ALL CATEGORIES FROM BLOG DATA THAT ARE NOT ACTIVE
    for(let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        for(let j = 0; j < blog.categories.length; j++) {
            const category = blog.categories[j];
            const exists = inactiveFilters.includes(category);
            const alreadyActive = activeFilters.includes(category);
            if(!exists && !alreadyActive) {
                inactiveFilters.push(category);
            }
        }
    }

    const activeCategoryButtons =[];
    if(activeFilters !== undefined) {
        for(let i = 0; i < activeFilters.length; i++) {
            activeCategoryButtons.push(
                <Button 
                    text={activeFilters[i]} 
                    type="c" 
                    link={`blog`} 
                    key={activeFilters[i] + '1'} 
                    filter={false} 
                    term="category"
                />
            )
        }
    }

    const inactiveCategoryButtons = [];
    if(inactiveFilters !== undefined) {
        for(let i = 0; i < inactiveFilters.length; i++) {
            inactiveCategoryButtons.push(
                <Button 
                    text={inactiveFilters[i]} 
                    type="c" 
                    link={`blog`} 
                    key={inactiveFilters[i] + '1'} 
                    filter={false} 
                    term="category"
                />
            )
        }
    }

    return [activeCategoryButtons, inactiveCategoryButtons];


}