import { blogData } from "../data/blogData";
import BlogBox from "./blogBox";
import React from "react";
import { useQuery } from "../features/customHooks/useQuery";

export default function GetBlogBoxes(props) {
    const {numberToShow, indexStart, currentBlogTitle} = props;
    const indexStop = (+numberToShow) + (+indexStart);
    const blogs = blogData;
    const query = useQuery().get("category");



    //Sorts to have the most recently updated blog first
    blogs.sort((a,b) => {
        return b.date.getTime() - a.date.getTime();
    })

    // Get current blog filtered list (use this instead of blogArray when their is a query)
    const fullBlogBoxArray = [];
    if(query !== null) {
        const queries = query.split(" ");
        // console.log(queries);
        const capitalQueries = [];
        queries.forEach(category => {
            capitalQueries.push(category.charAt(0).toUpperCase() + category.slice(1));
        });
        

        // CURRENT WORKING FILTER TO CHECK CATEGORIES OF EACH BLOG TO MATCH THE CURRENT CATEGORY QUERIES. WILL ONLY SHOW IF THE BLOG FITS THE BILL FOR EACH CATEGORY -> WILL NEED TO ADD A DISAPPOINTED COMPONENT WHEN I DON'T HAVE ANY BLOGS THAT FIT THE BILL
        if(queries !== null) {
            // console.log(blogs[0].categories);
            // console.log(capitalQueries);
            var count = 0;
            for(let i = indexStart; i < blogs.length; i++) {
                // console.log(i);
                const blog = blogs[i];
                var success = capitalQueries.every(function(val) {
                    return blog.categories.indexOf(val) !== -1;
                });
                if(success) {
                    fullBlogBoxArray.push(
                        <div className="blog-item" key={blog.title + i}>
                            <BlogBox
                                subtitle={blog.subtitle}
                                title={blog.title}
                                previewText={blog.previewText}
                                categories={blog.categories}
                                image={blog.coverImage}
                                date={blog.date}
                            />
                        </div>
                )
                count++;
                }
            }
            if(fullBlogBoxArray.length !== 0) {
                console.log(fullBlogBoxArray);
            }
        }
    }

    const blogArray = [];
    if(query !== null) {
        const queries = query.split(" ");
        // console.log(queries);
        const capitalQueries = [];
        queries.forEach(category => {
            capitalQueries.push(category.charAt(0).toUpperCase() + category.slice(1));
        });
        

        // CURRENT WORKING FILTER TO CHECK CATEGORIES OF EACH BLOG TO MATCH THE CURRENT CATEGORY QUERIES. WILL ONLY SHOW IF THE BLOG FITS THE BILL FOR EACH CATEGORY -> WILL NEED TO ADD A DISAPPOINTED COMPONENT WHEN I DON'T HAVE ANY BLOGS THAT FIT THE BILL
        if(queries !== null) {
            // console.log(blogs[0].categories);
            // console.log(capitalQueries);
            var count = 0;
            for(let i = indexStart; count < indexStop && i < blogs.length; i++) {
                // console.log(i);
                const blog = blogs[i];
                var success = capitalQueries.every(function(val) {
                    return blog.categories.indexOf(val) !== -1;
                });
                if(success) {
                    blogArray.push(
                        <div className="blog-item" key={blog.title + i}>
                            <BlogBox
                                subtitle={blog.subtitle}
                                title={blog.title}
                                previewText={blog.previewText}
                                categories={blog.categories}
                                image={blog.coverImage}
                                date={blog.date}
                            />
                        </div>
                )
                count++;
                }
            }
            if(blogArray.length !== 0) {
                return blogArray;
            }
            return <p>I'm sorry. I haven't written a blog that fits these filters...</p>
        }
    }

    // Makes sure the blog boxes are not the same as the current blog being shown
    if(currentBlogTitle !== undefined) {
        var count = +indexStart;
        var index = 0;
        do {
            const blog = blogs[index];
            if(blog === undefined) {
                count = indexStop;
                break;
            }
            if(currentBlogTitle !== blog.title && blog !== undefined) {
                // Change this to a function or something -> duplicate code right now
                blogArray.push(
                    <div className="blog-item" key={blog.title + index}>
                        <BlogBox
                            subtitle={blog.subtitle}
                            title={blog.title}
                            previewText={blog.previewText}
                            categories={blog.categories}
                            image={blog.coverImage}
                            date={blog.date}
                        />
                    </div>
                )
                count++;
            }
            index += 1;
        } while(count < indexStop);
        if(blogArray === undefined) {
            return null
        }
        return blogArray;
    }


    // Returns the blogs you ask for
    if(blogs !== undefined) {
        for(let i = indexStart; i < indexStop && i < blogs.length; i++) {
            const blog = blogs[i];
            blogArray.push(
                <div className="blog-item" key={blog.title + i}>
                    <BlogBox
                        subtitle={blog.subtitle}
                        title={blog.title}
                        previewText={blog.previewText}
                        categories={blog.categories}
                        image={blog.coverImage}
                        date={blog.date}
                    />
                </div>
            )
        };

        return blogArray;
    }

    return null;

}