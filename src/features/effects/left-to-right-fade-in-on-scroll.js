import { useEffect } from "react";
import { gsap } from 'gsap';

export const useLeftToRightFadeIn = () => {
    useEffect(() => {
        var sections = gsap.utils.toArray('.left-to-right');

        sections.forEach((section) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    markers: true,
                    scrub: 1
                }
            });

            tl.addLabel("start")
                .from(section, {x: -50, opacity: 0})
                .addLabel("move")
                .to(section, {x: 0, opacity: 1});

        })
    });
}