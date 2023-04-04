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
import BlogCategories from "../components/blogCategories/blogCategories";
import GetBlogBoxes from "../components/getBlogBoxes";
import GetSocialMediaIcons from "../components/socialMedia/getSocialMediaIcons";


export default function BlogArticle() {

    // Probaby change make this more of a universal check in another file and import it
    const blogId = useParams().id;
    const blogTitle = blogId.replace(/-/g, ' ');

    const article = blogData.find(blog => blog.title.toLowerCase() === blogTitle);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const displayDate = `${months[article.date.getMonth()]} ${article.date.getDate()}, ${article.date.getFullYear()}`;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power2.in"});

    //Effect for fading in section by section yay woah man missed a day :( few days left
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
                        <div className="article-cover">
                            <Image img={{
                                alt: article.coverImage.alt,
                                height: "100%",
                                width: "100%",
                                src: article.coverImage.src
                            }}/>
                        </div>
                        <div className="article-title-card">
                            <h1>{article.title}</h1>
                            <h3>{article.subtitle}</h3>
                            <div className='blog-box-categories'>
                                <BlogCategories categories={article.categories}/>
                            </div>
                            <div className="social-date">
                                <GetSocialMediaIcons 
                                    article={article}
                                />
                                <div className="article-date">
                                    <p><i>Last Updated: {displayDate}</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="article-copy">
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
                        <GetBlogBoxes
                            numberToShow="3"
                            indexStart="0"
                            currentBlogTitle={article.title}
                            dontShowMoreBoxes={true}
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
