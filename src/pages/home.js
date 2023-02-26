import { Helmet } from "react-helmet";
import Button from "../components/button";
import RenderRadarChart from "../components/chart/renderRadarChart";
import RenderSimpleBarChart from "../components/chart/renderSimpleBarChart";
import { experienceData, programmingData } from "../data/data";
import TimeLine from "../components/timeline";
import Image from "../components/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

export default function Home() {
    const header = React.createRef();

    useEffect(() => {
        gsap.to(header.current, {color: "#8c0", duration: 6})
    }, [header]);

    gsap.registerPlugin(ScrollTrigger);

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#timeline",
    //         start: "top 80%",
    //         markers: true,
    //         toggleActions: "restart pause reverse none",
    //     },
    // });

    // tl.to("#timeline", {
    //     rotation: 360,
    //     duration: 3,
    //     opacity: 0
    // })
    // .to("#timeline", {
    //     rotation: 360,
    //     duration: 3,
    //     opacity: 1
    // });

    useEffect(() => {gsap.to(".right-to-left-incoming", {
        scrollTrigger: {
            trigger: ".right-to-left-incoming",
            start: "center center",
            markers: true,
            toggleActions: "restart pause reverse none"
        },
        opacity: 1,
        duration: 3
        })
    });

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
                                        Hi, I'm<br/><div className="highlight-container">Derek <span className="highlight">Lord</span></div>
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
                    <div className="column-one secondary-color">
                        <div>
                            <h1>Bar Chart</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="primary-color" id="experience">
                <div className="container">
                    <div className="column-two-even secondary-color">

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

            <div className="bg-color-dark-blue right-to-left-incoming" id="3">
                <div className="container">
                    <div className="column-two-left-forth">
                        <div>
                            <h3>Two Left Forth</h3>
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
            <div className="bg-color-blue" id="4">
                <div className="container">
                    <div className="column-two-right-third">
                        <div>
                            <h3>Two Right Third</h3>
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
            <div className="bg-color-dark-blue" id="5">
                <div className="container">
                    <div className="column-two-right-forth">
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
            <div className="bg-color-blue" id="6">
                <div className="container">
                    <div className="column-three-even">
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
            <div className="bg-color-white" id="7">
                <div className="container">
                    <div className="column-four-even">
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
