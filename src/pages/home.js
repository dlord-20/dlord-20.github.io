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
import { useTimelineEffect } from "../features/effects/timeline-effects";
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
    useTimelineEffect();
    useDownToUpFadeIn();

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    useEffect(() => {
        let tl = gsap.timeline();

        tl.from(".header", {x: 25, opacity: 0})
            .to(".header", {x: 0, opacity: 1,}, "-=.5")
            .from(".highlight-container", {x: 25, opacity: 0})
            .to(".highlight-container", {x: 0, opacity: 1}, "-=.55")
            .from(".description", {x: 25, opacity: 0})
            .to(".description", {x: 0, opacity: 1}, "-=.55")
            .from(".buttons", {x: 25, opacity: 0})
            .to(".buttons", {x: 0, opacity: 1}, "-=.55");

            // START OF ALPHABET CLOCK
            var columns = gsap.utils.toArray('.alphabet');
            var letters = gsap.utils.toArray('.letter');

            let alphabetTl = gsap.timeline();
            const words = ["MARKETER", "DESIGNER", " ACTOR", "  MODEL", "SPRINTER", "    LDS", "HUSBAND", " FATHER", "   8", "7", "       6", "     5", "  4", "      3", "    2", " 1", "00000000"]
            let num = 0;
            const clockGap = .75;
            const fontSize = 16;

            for(let k = 0; k < words.length; k++) {
                for(let i = 0; i < columns.length; i++) {
                    //Get the letter in the current word
                    let letter = words[k].charAt(i);
                    for(let j = 0; j < alphabet.length; j++) {
                        // Check the current letter with the alphabet
                        if(letter === alphabet[j]) {
                            // Move the column to the correct letter position to make the word
                            alphabetTl.to(columns[i], { y: (j - 3) * - fontSize + fontSize/2}, num)
                        } else {
                            // Make all the other letters besides the letters in the current word a little transparent
                            alphabetTl.to(letters[(i * alphabet.length) + j], {opacity: .2}, num)
                            // Reset opacity on all letters except during the last word
                            if(k !== words.length - 1) {
                                alphabetTl.to(letters[(i * alphabet.length) + j], {opacity: 1}, clockGap + num);
                            } 
                        }
                    }
                }
                num += clockGap;
            }
            // END OF ALPHABET CLOCK
    }, []);

    // START OF ALPHABET CLOCK
    // Formats each character to JSX in the alphabet array
    const column = [];
    alphabet.forEach(letter => {
        const group = (
            <div className="letter-container">
                <p><span className="letter">{letter}</span></p>
            </div>
        )
        column.push(group)
    });

    //Formats each letters in the column array into one object
    const getAlphabetColumn = () => {
        return (
            <div className="alphabet">
                {column}
            </div>
        )
    }

    //Returns the columns of the number of alphabet columns requested
    const getAlphabetColumns = (numberOfColumns) => {
        const columns = [];
        for(let i = 0; i < numberOfColumns; i++) {
            columns.push(getAlphabetColumn());
        }
        return columns;
    }
    // END OF ALPHABET CLOCK


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
                                    <h1 className="header" ref={header}>
                                        Hi, I'm<br/><div className="highlight-container">Derek <span className="highlight">Lord</span></div>
                                    </h1>
                                    <p className="description">I'm an eager digital marketer who is on a mission to decrease customer turnover while attracting new cliential.</p>
                                    <div className="buttons">
                                        <Button text="Let's Talk" link="works"/>
                                        <Button text="See More" link="services" type="b" />
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
            <div className="primary-color" id="alphabet">
                <div className="container">
                    <div className="column-one secondary-color">
                        <div className="word-container">
                            {getAlphabetColumns(8)}
                        </div>
                        <br/>
                        <Button text="Testing"/>
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
