import { blogData } from "../data/blogData";
import BlogBox from "./blogBox";
import React from "react";
import { useQuery } from "../features/customHooks/useQuery";

export default function GetBlogBoxes(props) {
    const {numberToShow, indexStart, currentBlogTitle} = props;
    const indexStop = (+numberToShow) + (+indexStart);
    const blogs = blogData;


    //Sorts to have the most recently updated blog first
    blogs.sort((a,b) => {
        return b.date.getTime() - a.date.getTime();
    })

    const blogArray = [];
    const query = useQuery().get("category");

    // FILTER BLOGS BASED ON QUERY AND RETURNS AN ARRAY OF THE FILTERED BLOGS
    if(query !== null) {
        for(let i = indexStart; i < indexStop && i < blogs.length; i++) {
            const blog = blogs[i];
            var categoryIncluded = false;
            for(let j = 0; j < blog.categories.length; j++) {
                const blogCategory = blog.categories[j];
                if(blogCategory.toLowerCase() === query) {
                    categoryIncluded = true;
                }
            }
            if(categoryIncluded) {
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
            )}
        }

        return blogArray;
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