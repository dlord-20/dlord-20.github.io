import { Helmet } from "react-helmet";

export default function Home() {

    return (
        <div className="container">
            <Helmet>
                <title>Home Title</title>
            </Helmet>
            <div className="inner-container">
                <h1>Derek Lord</h1>
                <p>Auto generated text for description</p>
            </div>
        </div>
    );
}