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
                <p>column 1</p>
                <p>column 2</p>
            </div>
            <div className="column-two-left">
                <p>column 1</p>
                <p>column 2</p>
            </div>
            <div className="column-two-right">
                <p>column 1</p>
                <p>column 2</p>
            </div>
        </div>
    );
}
