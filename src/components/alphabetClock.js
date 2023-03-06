
import { alphabet } from "../data/data";
import { useAlphabetClock } from "../features/effects/use-alphabet-clock";
import { gsap } from 'gsap';


export default function AlphabetClock() {


    useAlphabetClock();


    // Formats each character to JSX in the alphabet array
    const column = [];
    alphabet.forEach(letter => {
        const group = (
            <div className="letter-container" key={letter + "-letter"}>
                <p><span className="letter">{letter}</span></p>
            </div>
        )
        column.push(group)
    });

    //Formats each letters in the column array into one object
    const getAlphabetColumn = (num) => {
        return (
            <div className="alphabet" key={num + "-column"}>
                {column}
            </div>
        )
    }

    //Returns the columns of the number of alphabet columns requested
    const getAlphabetColumns = (numberOfColumns) => {
        const columns = [];
        for(let i = 0; i < numberOfColumns; i++) {
            columns.push(getAlphabetColumn(i));
        }
        return columns;
    }

    const handleClick = () => {
        const container = gsap.utils.toArray('.word-container');
        const bodyContainer = gsap.utils.toArray('.body-container');

        // Kills the start animation
        const alphabetTl = gsap.timeline({});
        alphabetTl.to(bodyContainer[0], {position: "fixed"})
        alphabetTl.to(container[0], { opacity: 0, duration: 1, display: "none"});
        alphabetTl.to(bodyContainer[0], {position: "inherit"}, "-=1")
    }

    return (
        <div className="word-container" onClick={() => handleClick()}>
            <div className="alphabet-clock">
                {getAlphabetColumns(8)}
            </div>
            <p className="continue">Click to continue to site</p>
        </div>
    )
}