import { Helmet } from "react-helmet";
import Button from "../components/button";

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
                <div>
                    <h3>Two Even</h3>
                </div>
                <div>
                    <h2>Get it</h2>
                    <img src="#" alt="Text here"/>
                </div>
                <div>
                    <p>Auto generated text here</p>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="column-two-left-third">
                <div>
                    <h3>Two Left Third</h3>
                </div>
                <div>
                    <p>column 1</p>
                </div>
                <div>
                    <p>column 2</p>
                </div>
                <div>
                    <Button text="Happy" type="b"/>
                </div>
            </div>
            <div className="column-two-left-forth">
                <div>
                    <h3>Two Left Forth</h3>
                </div>
                <div>
                    <p>column 1</p>
                </div>
                <div>
                    <p>column 2</p>
                </div>
                <div>
                    <p>Bottom title</p>
                </div>
            </div>
            <div className="column-two-right-third">
                <div>
                    <h3>Two Right Third</h3>
                </div>
                <div>
                    <p>column 1</p>
                </div>
                <div>
                    <p>column 2</p>
                </div>
                <div>
                    <p>Bottom title</p>
                </div>
            </div>
            <div className="column-two-right-forth">
                <div>
                    <h3>Two Right Forth</h3>
                </div>
                <div>
                    <p>column 1</p>
                </div>
                <div>
                    <p>column 2</p>
                </div>
                <div>
                    <p>Bottom title</p>
                </div>
            </div>
            <div className="column-three-even">
                <div>
                    <h3>Three</h3>
                </div>
                <div>
                    <p>column 1</p>
                </div>
                <div>
                    <p>column 2</p>
                </div>
                <div>
                    <p>column 3</p>
                </div>
                <div>
                    <p>Bottom title</p>
                </div>
            </div>
            <div className="column-four-even">
                <div>
                    <h3>Forth Even</h3>
                </div>
                <div>
                    <p>column 1</p>
                </div>
                <div>
                    <p>column 2</p>
                </div>
                <div>
                    <p>column 3</p>
                </div>
                <div>
                    <p>column 4</p>
                </div>
                <div>
                    <p>Bottom title</p>
                </div>
            </div>
        </div>
    );
}
