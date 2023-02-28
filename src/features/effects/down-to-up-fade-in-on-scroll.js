import { useEffect } from "react";
import { gsap } from 'gsap';

export const useDownToUpFadeIn = () => {
    useEffect(() => {
        var sections = gsap.utils.toArray('.down-to-up-incoming');

        sections.forEach((section) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "+=200",
                    markers: true,
                    scrub: 1                
                }
            });

            tl.addLabel("start")
                .from(section, {
                    y: 200, 
                    opacity: 0,
                    duration: 2000
                })
                .addLabel("move")
                .to(section, {
                    y: 0, 
                    opacity: 1
                });

        })
    });
}