import { Helmet } from "react-helmet";

export default function Home() {

    return (
        <div className="container">
            <Helmet>
                <title>Home Title</title>
            </Helmet>
            <p>Home Page</p>
        </div>
    );
}