import { blogData } from "../data/blogData";
import BlogBox from "./blogBox";

export default function GetBlogBoxes(props) {
    const numberToShow = props.numberToShow;
    const indexStart = props.indexStart;
    const currentBlogTitle = props.currentBlogTitle;
    const indexStop = (+numberToShow) + (+indexStart);
    const blogs = blogData;

    //Sorts to have the most recently updated blog first
    blogs.sort((a,b) => {
        return b.date.getTime() - a.date.getTime()
    })

    const blogArray = [];

    if(currentBlogTitle !== undefined) {
        var count = +indexStart;
        var index = 0;
        console.log('startindex: ' + index);
        do {
            const blog = blogs[index];
            if(blog === undefined) {
                count = indexStop;
                break;
            }
            if(currentBlogTitle !== blog.title && blog !== undefined) {
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