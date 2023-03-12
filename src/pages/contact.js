import { Helmet } from "react-helmet";
import Button from "../components/button";
import RenderRadarChart from "../components/chart/renderRadarChart";
import RenderSimpleBarChart from "../components/chart/renderSimpleBarChart";
import { experienceData, programmingData } from "../data/data";
import TimeLine from "../components/timeline";
import Image from "../components/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRightToLeftFadeIn } from "../features/effects/fadeIn/right-to-left-fade-in-on-scroll";
import { useTimelineEffect } from "../features/effects/timeline-effects";
import { useDownToUpFadeIn } from "../features/effects/fadeIn/down-to-up-fade-in-on-scroll";
import { useLeftToRightFadeIn } from "../features/effects/fadeIn/left-to-right-fade-in-on-scroll";


export default function Contact() {
    const header = React.createRef();

    // useEffect(() => {
    //     gsap.to(header.current, {color: "#8c0", duration: 6})
    // }, [header]);

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
                <title>Home Title</title>
            </Helmet>
            <div className="bg-color-blue" id="cover">
                <div className="container">
                    <div className="column-two-left-third">
                        <div>
                        </div>
                        <div className="section-container cover-container">
                            <div className="cover">
                                <div className="center-left">
                                    <h1 ref={header}>
                                        Contact
                                    </h1>
                                    <p>I'm an eager digital marketer who is on a mission to decrease customer turnover while attracting new cliential.</p>
                                    <div className="buttons">
                                        <Button text="Let's Talk" link="works"/>
                                        <Button text="Check out my work" link="services" type="b" />
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
            <div className="primary-color" id="test">
                <div className="container">
                    <div className="column-one secondary-color">
                        <div>
                            <h1>Derek Lord</h1>
                            <p>Auto generated text for description</p>
                            <br/>
                            <Button text="Testing"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="skills">
                <div className="container">
                    <div className="column-one secondary-color">
                        <div>
                            <h1>Radar Chart</h1>
                            <RenderRadarChart data={programmingData}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color-2" id="bar-chart">
                <div className="container">
                    <div className="column-one secondary-color right-to-left-incoming">
                        <div>
                            <h1>Bar Chart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="experience">
                <div className="container">
                    <div className="column-two-even secondary-color down-to-up-incoming">

                        <div>
                            <h1>Two Even</h1>
                            <h2>Two Even</h2>
                            <h3>Two Even</h3>
                            <h4>Two Even</h4>
                            <h5>Two Even</h5>
                            <h6>Two Even</h6>
                        </div>
                        <div>
                            <RenderSimpleBarChart data={experienceData}/>
                        </div>
                        <div>
                            <h4>Skills</h4>
                            <p>Auto generated short description of my skills</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="timeline">
                <div className="container">
                    <div className="column-one">
                        <div>
                            <h2>Timeline</h2>
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
