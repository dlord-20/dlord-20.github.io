import { useEffect } from "react";
import { gsap } from 'gsap';

export const fadeController = (sectionsArray, xStart, yStart) => {
    return (
        sectionsArray.forEach((section) => {
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
                    x: xStart,
                    y: yStart, 
                    opacity: 0,
                    duration: 2000
                })
                .addLabel("move")
                .to(section, {
                    x: 0,
                    y: 0, 
                    opacity: 1
                });
        })
    )
}