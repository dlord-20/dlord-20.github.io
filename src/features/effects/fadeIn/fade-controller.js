import { gsap } from 'gsap';

export const fadeController = (sectionsArray, xStart, yStart) => {
    return (
        sectionsArray.forEach((section) => {
            let tl;
            if(yStart !== 0) {
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: `${yStart * -1} 85%`,
                        end: "+=175",
                        // markers: true,
                        scrub: 1,
                    }
                });
            } else {
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "+=175",
                        // markers: true,
                        scrub: 1
                    }
                });
            }
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
                    ease: "power4",
                    opacity: 1              
                });
        })
    )
}