import { useEffect } from "react";
import { gsap } from 'gsap';

export const useRightToLeftFadeIn = () => {
    useEffect(() => {
        var sections = gsap.utils.toArray('.right-to-left-incoming');

        sections.forEach((section) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    markers: true,
                    scrub: 1                }
            });

            tl.addLabel("start")
                .from(section, {x: 50, opacity: 0})
                .addLabel("move")
                .to(section, {x: 0, opacity: 1});

        })
    });
}