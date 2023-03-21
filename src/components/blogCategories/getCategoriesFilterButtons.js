
import { useQuery } from '../../features/customHooks/useQuery';
import ActiveBlogCategories from './activeBlogCategory';
import InactiveBlogCategories from './inActiveBlogCategory';

export default function GetCategoryFilterButtons() {
    // GET SELECTED FILTERS FROM QUERY AND MAKE A LIST
    const active = useQuery().get("category");
    const activeFilters = [];

    // Gets the currently filtered active blog categories
    if(active !== null) {
        const serperatedActiveCategories = active.split(" ");

        // Make first letter in each word in active category inactiveFilters captial
        serperatedActiveCategories.forEach(category => {
            activeFilters.push(category.charAt(0).toUpperCase() + category.slice(1));
        });
    }


    // Returns all the category filter buttons (both active and inactive filters)
    return [
    <ActiveBlogCategories categories={activeFilters} key={"active"}/>, 
    <InactiveBlogCategories activeFilters={activeFilters} key={"inactive"}/>];


}