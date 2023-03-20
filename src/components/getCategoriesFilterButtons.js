import { act } from 'react-dom/test-utils';
import { blogData } from '../data/blogData';
import { useQuery } from '../features/customHooks/useQuery';
import Button from './button';

export default function GetCategoryFilterButtons() {
    const blogs = blogData;
    // GET SELECTED FILTERS FROM QUERY AND MAKE A LIST
    const active = useQuery().get("category");
    const activeFilters = [];
    const inactiveFilters = [];
    const activeCategoryButtons =[];

    if(active !== null) {
        const serperatedActiveCategories = active.split(" ");


        // Make first letter in each word in active category inactiveFilters captial
        serperatedActiveCategories.forEach(category => {
            activeFilters.push(category.charAt(0).toUpperCase() + category.slice(1));
        });





        // Create an array of the active buttons
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
    }
    
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
    

    // Create an array of the inactive buttons
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

    // Returns all the category filter buttons (both active and inactive filters)
    return [activeCategoryButtons, inactiveCategoryButtons];


}