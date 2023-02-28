import { useEffect } from "react";
import { gsap } from 'gsap';
import { fadeController } from "./fade-controller";

export const useRightToLeftFadeIn = () => {
    useEffect(() => {
        var sections = gsap.utils.toArray('.right-to-left-incoming');

        fadeController(sections, 50, 0);
    });
}