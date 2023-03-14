import { blogData } from "../data/blogData";
import BlogBox from "./blogBox";

export default function GetBlogBoxes(props) {
    const numberToShow = props.numberToShow;
    const indexStart = props.indexStart;
    const indexStop = (+numberToShow) + (+indexStart);
    const blogs = blogData;

    //Sorts to have the most recently updated blog first
    blogs.sort((a,b) => {
        return b.date.getTime() - a.date.getTime()
    })

    const blogArray = [];

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
        console.log(blogArray[0])

        return blogArray;
    }

    return null;

}