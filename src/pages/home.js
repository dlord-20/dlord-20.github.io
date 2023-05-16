import { Helmet } from "react-helmet";
import Button from "../components/button";
import RenderRadarChart from "../components/chart/renderRadarChart";
import RenderSimpleBarChart from "../components/chart/renderSimpleBarChart";
import { experienceData, programmingData } from "../data/data";
import TimeLine from "../components/timeline";
import Image from "../components/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect} from "react";
import { useRightToLeftFadeIn } from "../features/effects/fadeIn/right-to-left-fade-in-on-scroll";
import { useDownToUpFadeIn } from "../features/effects/fadeIn/down-to-up-fade-in-on-scroll";
import { useLeftToRightFadeIn } from "../features/effects/fadeIn/left-to-right-fade-in-on-scroll";




export default function Home() {
    const header = React.createRef();

    // useEffect(() => {
    //     gsap.to(header.current, {color: "#8c0", duration: 6})
    // }, [header]);

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "back"});

    //Effect for fading in section by section
    useRightToLeftFadeIn();
    useLeftToRightFadeIn();
    useDownToUpFadeIn();
    



    useEffect(() => {
        // let tl = gsap.timeline();

        // tl.from(".header", {x: 25, opacity: 0})
        //     .to(".header", {x: 0, opacity: 1,}, "-=.5")
        //     .from(".highlight-container", {x: 25, opacity: 0})
        //     .to(".highlight-container", {x: 0, opacity: 1}, "-=.55")
        //     .from(".description", {x: 25, opacity: 0})
        //     .to(".description", {x: 0, opacity: 1}, "-=.55")
        //     .from(".buttons", {x: 25, opacity: 0})
        //     .to(".buttons", {x: 0, opacity: 1}, "-=.55");


    }, []);


    return (
        <div className="body-container" id="top">
            <Helmet>
                <title>Derek Lord | Portfolio</title>
            </Helmet>
            <div className="bg-color-blue" id="cover">
                <div className="container">
                    <div className="column-two-left-third">
                        <div>
                        </div>
                        <div className="section-container cover-container">
                            <div className="cover">
                                <div className="center-left">
                                    <h1 className="header" ref={header}>
                                        Hi, I'm<br/><div className="highlight-container">Derek <span className="highlight">Lord</span></div>
                                    </h1>
                                    <p className="description">I'm an eager digital marketer who is on a mission to decrease customer turnover while attracting new cliential.</p>
                                    <div className="buttons">
                                        <Button 
                                            text="Let's Talk" link="works"
                                        />
                                        <Button 
                                            text="See More" link="services" 
                                            type="b" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="potrait">
                            <Image img={{
                                alt: "test",
                                height: "100%",
                                width: "100%",
                                src: "Derek-Lord-Smiling-Small.jpg",
                                }}/>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="experience">
                <div className="container">
                    <div className="column-two-even secondary-color down-to-up-incoming">
                        <div>
                            <h2>Years of Experience</h2>
                        </div>
                        <div>
                            <RenderSimpleBarChart data={experienceData}/>
                        </div>
                        <div>
                            <h4>Skills</h4>
                            <p>I've had many roles over the years, but I've often found myself in the position that wears many different hats. I've had to quickly adapt to new tasks and roles in order to help the team achieve our goals.</p>
                            <p>While I've aquired a plethera of skills over the years, this graph represents the skills I'm most confident in. I continue to work on these skills whether I am actually using one of these skills with my current clients or not. If you don't see what you're looking for just send me a message and I'll let you know what I can do to help you out.</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="skills">
                <div className="container">
                    <div className="column-two-even secondary-color down-to-up-incoming">
                        <div>
                            <h2>Programming Experience</h2>
                        </div>
                        <div>
                            <h4>Skills</h4>
                            <p>Over the years I've found myself drawn to programming. Either though I have no formal training I have taken lots of online courses and honed my skills over the years with personal projects and client requests.</p>
                            <p>This site was created with React and uses various libraries to speed the website building process while allowing me to have complete control over how my website looks, feels, and preforms.</p>
                            <p>Knowing how to code allows me to create custom components on websites, create personalized emails, create custom landing pages, and much more!</p>
                        </div>
                        <div>
                            <RenderRadarChart data={programmingData}/>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="primary-color" id="timeline">
                <div className="container">
                    <div className="column-one">
                        <div>
                            <h2>Thru the years</h2>
                        </div>
                        <div>
                            <TimeLine/>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="" id="3">
                <div className="container">
                    <div className="column-two-left-forth right-to-left-incoming">
                        <div className="f">
                            <h3>Two Left Forth</h3>
                            <p>askdvubnwiuvc aqisucbnis wuvbiuvc biudbviuwdbvijsd avisdbviusdviu dvuic sadvb isdvb vidsub vdsibv cuidsbv dsbv saiuvb usiadbisd auviud vuisd vbuiwdbfv isduabiuds vudsibv isudbvisdub isbdvi sduiv bsiudbv biudbvf sduvb sidubv suidbv suiadbv iusda iusadbv sudbviusd viubsd ivbsd viusd baviusad viusdb viubsadv uidbs viusdbv iuabv uiduvib saidbv iusdb viusadbviusdb viusdbv iuasbd visduivb dsuivbiusd bvisudbviusd viusdbvisu dviub dsvuibasd uvbiusdb viuds bvuisdbv uisdvb sidubv uisd vuisdb vuisdb vuidb viuasdbv uidbv iud vuisdbv sdui</p>
                        </div>
                        <div>
                            <p>column 1</p>
                            <p>askdvubnwiuvc aqisucbnis wuvbiuvc biudbviuwdbvijsd avisdbviusdviu dvuic sadvb isdvb vidsub vdsibv cuidsbv dsbv saiuvb usiadbisd auviud vuisd vbuiwdbfv isduabiuds vudsibv isudbvisdub isbdvi sduiv bsiudbv biudbvf sduvb sidubv suidbv suiadbv iusda iusadbv sudbviusd viubsd ivbsd viusd baviusad viusdb viubsadv uidbs viusdbv iuabv uiduvib saidbv iusdb viusadbviusdb viusdbv iuasbd visduivb dsuivbiusd bvisudbviusd viusdbvisu dviub dsvuibasd uvbiusdb viuds bvuisdbv uisdvb sidubv uisd vuisdb vuisdb vuidb viuasdbv uidbv iud vuisdbv sdui</p>
                        </div>
                        <div>
                            <p>column 2</p>
                            <p>askdvubnwiuvc aqisucbnis wuvbiuvc biudbviuwdbvijsd avisdbviusdviu dvuic sadvb isdvb vidsub vdsibv cuidsbv dsbv saiuvb usiadbisd auviud vuisd vbuiwdbfv isduabiuds vudsibv isudbvisdub isbdvi sduiv bsiudbv biudbvf sduvb sidubv suidbv suiadbv iusda iusadbv sudbviusd viubsd ivbsd viusd baviusad viusdb viubsadv uidbs viusdbv iuabv uiduvib saidbv iusdb viusadbviusdb viusdbv iuasbd visduivb dsuivbiusd bvisudbviusd viusdbvisu dviub dsvuibasd uvbiusdb viuds bvuisdbv uisdvb sidubv uisd vuisdb vuisdb vuidb viuasdbv uidbv iud vuisdbv sdui</p>
                        </div>
                        <div>
                            <p>Bottom title</p>
                            <p>askdvubnwiuvc aqisucbnis wuvbiuvc biudbviuwdbvijsd avisdbviusdviu dvuic sadvb isdvb vidsub vdsibv cuidsbv dsbv saiuvb usiadbisd auviud vuisd vbuiwdbfv isduabiuds vudsibv isudbvisdub isbdvi sduiv bsiudbv biudbvf sduvb sidubv suidbv suiadbv iusda iusadbv sudbviusd viubsd ivbsd viusd baviusad viusdb viubsadv uidbs viusdbv iuabv uiduvib saidbv iusdb viusadbviusdb viusdbv iuasbd visduivb dsuivbiusd bvisudbviusd viusdbvisu dviub dsvuibasd uvbiusdb viuds bvuisdbv uisdvb sidubv uisd vuisdb vuisdb vuidb viuasdbv uidbv iud vuisdbv sdui</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" id="4">
                <div className="container">
                    <div className="column-two-right-third right-to-left-incoming">
                        <div>
                            <h3>Two Right Third</h3>
                            <p>askdvubnwiuvc aqisucbnis wuvbiuvc biudbviuwdbvijsd avisdbviusdviu dvuic sadvb isdvb vidsub vdsibv cuidsbv dsbv saiuvb usiadbisd auviud vuisd vbuiwdbfv isduabiuds vudsibv isudbvisdub isbdvi sduiv bsiudbv biudbvf sduvb sidubv suidbv suiadbv iusda iusadbv sudbviusd viubsd ivbsd viusd baviusad viusdb viubsadv uidbs viusdbv iuabv uiduvib saidbv iusdb viusadbviusdb viusdbv iuasbd visduivb dsuivbiusd bvisudbviusd viusdbvisu dviub dsvuibasd uvbiusdb viuds bvuisdbv uisdvb sidubv uisd vuisdb vuisdb vuidb viuasdbv uidbv iud vuisdbv sdui</p>
                        </div>
                        <div>
                            <p>column 1</p>
                        </div>
                        <div>
                            <p>column 2</p>
                        </div>
                        <div>
                            <p>Bottom title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="5">
                <div className="container">
                    <div className="column-two-right-forth right-to-left-incoming">
                        <div>
                            <h3>Two Right Forth</h3>
                        </div>
                        <div>
                            <p>column 1</p>
                        </div>
                        <div>
                            <p>column 2</p>
                        </div>
                        <div>
                            <p>Bottom title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" id="6">
                <div className="container">
                    <div className="column-three-even right-to-left-incoming">
                        <div>
                            <h3>Three</h3>
                        </div>
                        <div>
                            <p>column 1</p>
                        </div>
                        <div>
                            <p>column 2</p>
                        </div>
                        <div>
                            <p>column 3</p>
                        </div>
                        <div>
                            <p>Bottom title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" id="7">
                <div className="container">
                    <div className="column-four-even right-to-left-incoming">
                        <div>
                            <h3>Forth Even</h3>
                        </div>
                        <div>
                            <p>column 1</p>
                        </div>
                        <div>
                            <p>column 2</p>
                        </div>
                        <div>
                            <p>column 3</p>
                        </div>
                        <div>
                            <p>column 4</p>
                        </div>
                        <div>
                            <p>Bottom title</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
