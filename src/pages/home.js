import { Helmet } from "react-helmet";
import Button from "../components/button";

export default function Home() {

    return (
            <div className="container">
                <Helmet>
                    <title>Home Title</title>
                </Helmet>
                
                <div className="column-one">
                    <div></div>
                    <div>
                        <h1>Derek Lord</h1>
                        <p>Auto generated text for description</p>
                    </div>
                </div>
                <div className="column-two-even">
                    <div className="background-color-one"></div>
                    <div>
                        <h1>Two Even</h1>
                        <h2>Two Even</h2>
                        <h3>Two Even</h3>
                        <h4>Two Even</h4>
                        <h5>Two Even</h5>
                        <h6>Two Even</h6>
                    </div>
                    <div>
                        <img src="#" alt="This will be a graph showing my skills/experience"/>
                    </div>
                    <div>
                        <h4>Skills</h4>
                        <p>Auto generated short description of my skills</p>
                    </div>
                    <div>

                    </div>
                </div>
                    <div className="column-two-left-third">
                        <div></div>
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
                    <div></div>
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
                    <div></div>
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
                    <div></div>
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
                    <div></div>
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
                    <div></div>
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
