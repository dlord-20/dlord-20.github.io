import { useEffect } from "react";
import { gsap } from 'gsap';
import { alphabet } from "../../data/data";

export const useAlphabetClock = () => {

    useEffect(() => {

        var columns = gsap.utils.toArray('.alphabet');
        var letters = gsap.utils.toArray('.letter');

        let alphabetTl = gsap.timeline();
        const words = ["MARKETER", "DESIGNER", " ACTOR", "  MODEL", "SPRINTER", "    LDS", "HUSBAND", " FATHER", "   8", "7", "       6", "     5", "  4", "      3", "    2", " 1", "00000000"]
        let num = 0;
        const clockGap = .75;
        const fontSize = 16;

        for(let k = 0; k < words.length; k++) {
            for(let i = 0; i < columns.length; i++) {
                //Get the letter in the current word
                let letter = words[k].charAt(i);
                for(let j = 0; j < alphabet.length; j++) {
                    // Check the current letter with the alphabet
                    if(letter === alphabet[j]) {
                        // Move the column to the correct letter position to make the word
                        alphabetTl.to(columns[i], { y: (j - 3) * - fontSize + fontSize/2}, num)
                    } else {
                        // Make all the other letters besides the letters in the current word a little transparent
                        alphabetTl.to(letters[(i * alphabet.length) + j], {opacity: .2}, num)
                        // Reset opacity on all letters except during the last word
                        if(k !== words.length - 1) {
                            alphabetTl.to(letters[(i * alphabet.length) + j], {opacity: 1}, clockGap + num);
                        } 
                    }
                }
            }
            num += clockGap;
        }

    }, [])
}