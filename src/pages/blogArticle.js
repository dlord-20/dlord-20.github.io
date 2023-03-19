import { Helmet } from "react-helmet";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRightToLeftFadeIn } from "../features/effects/fadeIn/right-to-left-fade-in-on-scroll";
import { useDownToUpFadeIn } from "../features/effects/fadeIn/down-to-up-fade-in-on-scroll";
import { useLeftToRightFadeIn } from "../features/effects/fadeIn/left-to-right-fade-in-on-scroll";
import { useParams } from "react-router";
import { blogData } from "../data/blogData";
import Image from "../components/image";
import BlogCategories from "../components/blogCategories";
import GetBlogBoxes from "../components/getBlogBoxes";


export default function BlogArticle() {

    // Probaby change make this more of a universal check in another file and import it
    const blogId = useParams().id;
    const blogTitle = blogId.replace(/-/g, ' ');

    const article = blogData.find(blog => blog.title.toLowerCase() === blogTitle);

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power2.in"});

    //Effect for fading in section by section
    useRightToLeftFadeIn();
    useLeftToRightFadeIn();

    useDownToUpFadeIn();


    return (
        <div>
            <Helmet>
                <title>{article.title}</title>
            </Helmet>
            <div className="bg-color-blue" id="cover">
                <div className="container">
                    <div className="column-one">
                        <div>
                            <Image img={{
                                alt: article.coverImage.alt,
                                height: "100%",
                                width: "100%",
                                src: article.coverImage.src
                            }}/>
                        </div>
                        <div>
                            <h1>{article.title}</h1>
                            <h3>{article.subtitle}</h3>
                            <div className='blog-box-categories'>
                                <BlogCategories categories={article.categories}/>
                            </div>
                            {article.paragraphs}
                        </div>
                    </div>
                </div>
            </div>
            <div className="" id="6">
                <div className="container">
                    <div className="column-three-even right-to-left-incoming">
                        {/* Top spread across all columns */}
                        <div>
                            <h3>You might be interested in</h3>
                        </div>
                        {/* NEED A WAY TO NOT SHOW THE CURRENT BLOG POST */}
                        <GetBlogBoxes
                            numberToShow="3"
                            indexStart="0"
                            currentBlogTitle={article.title}
                        />

                        {/* Bottom spread across all columns */}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
