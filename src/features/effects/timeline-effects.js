import { useEffect } from "react";
import { gsap } from 'gsap';

export const useTimelineEffect = () => {
    useEffect(() => {

        let mm = gsap.matchMedia();

        var sections = gsap.utils.toArray('.vertical-timeline-element-content');
        // vertical-timeline-element-icon
        mm.add("(min-width: 1170px)", () => {
            for(let i = 0; i < sections.length; i ++) {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sections[i],
                        start: "top 80%",
                        // markers: true,
                        scrub: 1
                    }
                });
                if(i % 2 === 0) {
                    tl.addLabel("start")
                        .from(sections[i], {x: -50, opacity: 0})
                        .addLabel("move")
                        .to(sections[i], {x: 0, opacity: 1});
                } else {
                    tl.addLabel("start")
                        .from(sections[i], {x: 50, opacity: 0})
                        .addLabel("move")
                        .to(sections[i], {x: 0, opacity: 1});
                }
            }
        })
    }
)};