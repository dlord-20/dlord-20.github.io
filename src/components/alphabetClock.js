import { alphabet } from "../data/data";
import { useAlphabetClock } from "../features/effects/use-alphabet-clock";

export default function AlphabetClock() {

    useAlphabetClock();
    console.log("here");
    // START OF ALPHABET CLOCK

    // Formats each character to JSX in the alphabet array
    const column = [];
    alphabet.forEach(letter => {
        const group = (
            <div className="letter-container">
                <p><span className="letter">{letter}</span></p>
            </div>
        )
        column.push(group)
    });

    //Formats each letters in the column array into one object
    const getAlphabetColumn = () => {
        return (
            <div className="alphabet">
                {column}
            </div>
        )
    }

    //Returns the columns of the number of alphabet columns requested
    const getAlphabetColumns = (numberOfColumns) => {
        const columns = [];
        for(let i = 0; i < numberOfColumns; i++) {
            columns.push(getAlphabetColumn());
        }
        return columns;
    }
    // END OF ALPHABET CLOCK

    return (
        getAlphabetColumns(8)
    )
}