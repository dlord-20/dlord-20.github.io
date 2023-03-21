// import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import Button from './button';
import { useQuery } from '../features/customHooks/useQuery';

export default function ActiveBlogCategories(props) {
    const categories = props.categories;

    const query = useQuery().get("category");
    const location = useLocation();

    const getActiveLink = (text) => {
        if(query !== null) {
            const queries = query.split(" ");
            // console.log(queries);
            let newLink = "";
            queries.forEach((name, i) => {
                if(name === text.toLowerCase()) {
                    let search = location.search;
                    if(i === 0 && i === queries.length - 1) {
                        // console.log('link:')
                        // console.log(`/${link}`);
                        newLink = `blog`;
                    } else if (i === queries.length -1) {
                        // console.log('2nd');
                        // console.log(text);
                        // console.log(`/${link}` + search.replace("+" + text.toLowerCase(), ""));
                        newLink = `blog` + search.replace("+" + text.toLowerCase(), "");
                    } else {
                        // console.log('3rd');
                        // console.log(text);
                        // console.log(`/${link}` + search.replace(text.toLowerCase() + "+", ""));
                        newLink = `blog` + search.replace(text.toLowerCase() + "+", "");
                    }
                }
                
            })
            // if(!newLink) {
            //     if(!location.search) {
            //         newLink = `/${link}?${term}=${text.toLowerCase()}`;
            //     } else {
            //         newLink = `${location.search}+${text.toLowerCase()}`;
            //     }
            // }
            // console.log(newLink);
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
        return categoryButtons;
    }
    return null;

}