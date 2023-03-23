import { useLocation } from 'react-router';
import Button from '../button';
import { blogData } from '../../data/blogData';

export default function InactiveBlogCategories(props) {
    const activeFilters = props.activeFilters;
    const inactiveFilters = [];
    const location = useLocation();

    const blogs = blogData;

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

        return inactiveCategoryButtons;

}

