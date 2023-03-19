import { Helmet } from "react-helmet";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRightToLeftFadeIn } from "../features/effects/fadeIn/right-to-left-fade-in-on-scroll";
import { useTimelineEffect } from "../features/effects/timeline-effects";
import { useDownToUpFadeIn } from "../features/effects/fadeIn/down-to-up-fade-in-on-scroll";
import { useLeftToRightFadeIn } from "../features/effects/fadeIn/left-to-right-fade-in-on-scroll";
import GetBlogBoxes from "../components/getBlogBoxes";


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
                <title>Thee Blog</title>
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
                        {/* Top spread across all columns */}
                        <div>
                            <h3>Recent Blog Posts</h3>
                        </div>
                        <GetBlogBoxes
                            numberToShow="9"
                            indexStart="0"
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
