import { alphabet } from "../data/data";
import { useAlphabetClock } from "../features/effects/use-alphabet-clock";

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

    return (
        <div className="word-container">
            <div className="alphabet-clock">
                {getAlphabetColumns(8)}
            </div>
        </div>
    )
}