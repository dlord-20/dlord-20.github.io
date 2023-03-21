import { act } from 'react-dom/test-utils';
import { blogData } from '../data/blogData';
import { useQuery } from '../features/customHooks/useQuery';
import Button from './button';
import ActiveBlogCategories from './activeBlogCategory';
import { useLocation } from 'react-router';
import { text } from '@fortawesome/fontawesome-svg-core';

export default function GetCategoryFilterButtons() {
    const blogs = blogData;
    // GET SELECTED FILTERS FROM QUERY AND MAKE A LIST
    const active = useQuery().get("category");
    const activeFilters = [];
    const inactiveFilters = [];
    const activeCategoryButtons =[];
    const location = useLocation();

    if(active !== null) {
        const serperatedActiveCategories = active.split(" ");


        // Make first letter in each word in active category inactiveFilters captial
        serperatedActiveCategories.forEach(category => {
            activeFilters.push(category.charAt(0).toUpperCase() + category.slice(1));
        });

        activeCategoryButtons.push(<ActiveBlogCategories categories={activeFilters} key={"category"}/>);

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

    const getInactiveLink = (text) => {
        if(!location.search) {
            return `blog?category=${text.toLowerCase()}`;
        } else {
            return `blog${location.search}+${text.toLowerCase()}`;
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
                    link={getInactiveLink(inactiveFilters[i].toLowerCase())} 
                    key={inactiveFilters[i] + '1'} 

                />
            )
        }
    }

    // Returns all the category filter buttons (both active and inactive filters)
    return [activeCategoryButtons, inactiveCategoryButtons];


}