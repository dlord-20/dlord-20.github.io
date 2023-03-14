import { blogData } from "../data/blogData";
import BlogBox from "./blogBox";

export default function GetBlogBox() {
    const blogs = blogData;
    const blogArray = [];

    if(blogs !== undefined) {
        blogs.forEach(blog => {
            blogArray.push(
                <div className="blog-item">
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
        });
        return blogArray;
    }

    return null;

}