import { Helmet } from "react-helmet";

export default function Home() {

    return (
        <div className="container">
            <Helmet>
                <title>Home Title</title>
            </Helmet>
            <div className="column-one">
                <h1>Derek Lord</h1>
                <p>Auto generated text for description</p>
            </div>
            <div className="column-two-even">
                <p>column 1 - two even</p>
                <p>column 2</p>
            </div>
            <div className="column-two-left-third">
                <p>column 1 - left third</p>
                <p>column 2</p>
            </div>
            <div className="column-two-left-forth">
                <p>column 1 - left forth</p>
                <p>column 2</p>
            </div>
            <div className="column-two-right-third">
                <p>column 1 - right third</p>
                <p>column 2</p>
            </div>
            <div className="column-two-right-forth">
                <p>column 1 - right forth</p>
                <p>column 2</p>
            </div>
            <div className="column-three-even">
                <p>column 1 - three even</p>
                <p>column 2</p>
                <p>column 3</p>
            </div>
            <div className="column-four-even">
                <p>column 1 - four even</p>
                <p>column 2</p>
                <p>column 3</p>
                <p>column 4</p>
            </div>
        </div>
    );
}
