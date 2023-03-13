import { Helmet } from "react-helmet";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRightToLeftFadeIn } from "../features/effects/fadeIn/right-to-left-fade-in-on-scroll";
import { useTimelineEffect } from "../features/effects/timeline-effects";
import { useDownToUpFadeIn } from "../features/effects/fadeIn/down-to-up-fade-in-on-scroll";
import { useLeftToRightFadeIn } from "../features/effects/fadeIn/left-to-right-fade-in-on-scroll";
import BlogBox from "../components/blogBox";


export default function Blog() {

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power2.in"});

    //Effect for fading in section by section
    useRightToLeftFadeIn();
    useLeftToRightFadeIn();
    useTimelineEffect();
    useDownToUpFadeIn();


    return (
        <div>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div className="bg-color-blue" id="cover">
                <div className="container">
                    <div className="column-one">
                        <div>
                            <h1>Thee Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" id="6">
                <div className="container">
                    <div className="column-three-even right-to-left-incoming">
                        {/* Top spread aross all columns */}
                        <div>
                            <h3>Recent Blog Posts</h3>
                        </div>
                        <div className="blog-item">
                            <BlogBox 
                            subtitle="sub"
                            title="title"
                            previewText="Preview text"
                            categories={{
                                categories: ["AI", "Life", "Finance"]
                                }}
                            />
                        </div>
                        <div className="blog-item">
                            <BlogBox 
                            subtitle="wow"
                            title="title"
                            previewText="I want to see what happens when this is too long"
                            categories={{
                                categories: ["Computers", "Life", "Finance"]
                                }}
                            />
                        </div>
                        <div className="blog-item">
                            <BlogBox 
                            subtitle="sub"
                            title="title"
                            previewText="Preview text"
                            categories={{
                                categories: ["MolEvo", "Life", "Finance"]
                                }}
                            />
                        </div>
                        <div className="blog-item">
                            <BlogBox 
                            subtitle="sub"
                            title="title"
                            previewText="Preview text"
                            categories={{
                                categories: ["Start-ups", "Life", "Finance"]
                                }}
                            />
                        </div>

                        {/* Bottom spread aross all columns */}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
