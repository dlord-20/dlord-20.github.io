import { useEffect } from "react";
import { gsap } from 'gsap';

export const useTimelineEffect = () => {
    useEffect(() => {

        let mm = gsap.matchMedia();
        
        const timeline = (section) => {
            return (
                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "bottom bottom",
                        // markers: true,
                        scrub: 1
                    }
                })
            )
        }

        const effect = (tl, section, position) => {
            return (
                tl.addLabel("start")
                .from(section, {
                    x: position, 
                    opacity: 0,
                    duration: 2000

                })
                .addLabel("move")
                .to(section, {
                    x: 0, 
                    opacity: 1
                })
            )
        };

        var sections = gsap.utils.toArray('.vertical-timeline-element-content');

        mm.add("(min-width: 1170px)", () => {
            for(let i = 0; i < sections.length; i ++) {
                let tl = timeline(sections[i]);
                if(i % 2 === 0) {
                    effect(tl, sections[i], -50);
                } else {
                    effect(tl, sections[i], 50);
                }
            }
        });

        mm.add("(max-width: 1169px", () => {
            for(let i = 0; i < sections.length; i ++) {
                let tl = timeline(sections[i]);
                effect(tl, sections[i], 50);
            }
        });


        var timelineDates = gsap.utils.toArray('.vertical-timeline-element-date');

        mm.add("(min-width: 1170px)", () => {
            for(let i = 0; i < sections.length; i ++) {
                let tl = timeline(timelineDates[i]);
                if(i % 2 === 0) {
                    effect(tl, timelineDates[i], 100);
                } else {
                    effect(tl, timelineDates[i], -100);
                }
            }
        });

        mm.add("(max-width: 1169px", () => {
            for(let i = 0; i < sections.length; i ++) {
                let tl = timeline(timelineDates[i]);
                effect(tl, timelineDates[i], 100);
            }
        });


    }, [])
};