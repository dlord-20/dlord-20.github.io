import { useEffect } from "react";
import { gsap } from 'gsap';
import { fadeController } from "./fade-controller";

export const useLeftToRightFadeIn = () => {
    useEffect(() => {
        var sections = gsap.utils.toArray('.left-to-right');
        fadeController(sections, -50, 0);
    });
}