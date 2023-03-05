import { useEffect } from "react";
import { gsap } from 'gsap';
import { alphabet } from "../../data/data";


export const useAlphabetClock = () => {
    // MAKE COMPONENT NOT RETURN ANYTHING AFTER ONCOMPLETE AND ADD SOME OTHER STUFF TO FORMATTING
    

    useEffect(() => {

        var columns = gsap.utils.toArray('.alphabet');
        var letters = gsap.utils.toArray('.letter');
        const container = gsap.utils.toArray('.word-container');
        const bodyContainer = gsap.utils.toArray('.body-container');

        let alphabetTl = gsap.timeline({});
        const words = ["MARKETER", "DESIGNER", " ACTOR", "  MODEL", "SPRINTER", "    LDS", "HUSBAND", " FATHER", "  LET US", "F CKING", "   GO"];
        // const words = [ "TEST", "HERE" ];
        let num = 0;
        const clockGap = .95;
        const fontSize = 16 * 3;

        alphabetTl.to(bodyContainer[0], {position: "fixed"})
        for(let k = 0; k < words.length; k++) {
            for(let i = 0; i < columns.length; i++) {
                //Get the letter in the current word
                let letter = words[k].charAt(i);
                let isLetterBelow = false
                for(let j = 0; j < alphabet.length; j++) {
                    // Check the current letter with the alphabet
                    if(letter === alphabet[j]) {
                        // Makes the letters for the correct word to have full opacity
                        alphabetTl.to(letters[(i * alphabet.length) + j], { opacity: 1 }, num)

                        // Makes the letter right above of main letter a little transparent
                        alphabetTl.to(letters[(i * alphabet.length) + j - 1], { opacity: .35 }, num)
                        

                        // Move the column to the correct letter position to make the word
                        // alphabetTl.to(columns[i], { y: (j - 3) * - fontSize + fontSize/2, opacity: 1}, num)
                        alphabetTl.to(columns[i], { y: (j - 3) * - fontSize + fontSize*7, opacity: 1}, num)

                        // Makes it possible to affect the letter below
                        isLetterBelow = true;
                    } else if (isLetterBelow) {
                        // Makes the letter right below of main letter a little transparent

                        alphabetTl.to(letters[(i * alphabet.length) + j], { opacity: .35 }, num)
                        // Makes this only affects the letter right below the actual word
                        isLetterBelow = false;
                    } else {
                        // Make all the other letters besides the letters in the current word a little transparent
                        alphabetTl.to(letters[(i * alphabet.length) + j], {opacity: .2}, num)
                    }
                }
            }
            num += clockGap;
        }

        // Completely hides (removes) the element when completed
        alphabetTl.to(container[0], { opacity: 0, duration: 1, display: "none"});
        //Makes main content load right before this is about to disappear
        alphabetTl.to(bodyContainer[0], {position: "inherit"}, "-=1")
    }, [])
}