import { useEffect } from "react";
import { gsap } from 'gsap';
import { fadeController } from "./fade-controller";

export const useDownToUpFadeIn = () => {
    useEffect(() => {
        var sections = gsap.utils.toArray('.down-to-up-incoming');

        fadeController(sections, 0, 200);
    });
}