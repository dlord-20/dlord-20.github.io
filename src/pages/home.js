import { Helmet } from "react-helmet";
import Button from "../components/button";
import RenderRadarChart from "../components/chart/renderRadarChart";
import RenderSimpleBarChart from "../components/chart/renderSimpleBarChart";
import { experienceData, programmingData } from "../data/data";

export default function Home() {
    const data = [{name: 'html', Skills: 75, description: "Derek Rocks"}, {name: 'css', Skills: 20, description: "Derek Rocks"}];


    return (
            <div className="container">
                <Helmet>
                    <title>Home Title</title>
                </Helmet>
                
                <div className="column-one">
                    <div className="123"></div>
                    <div>
                        <h1>Derek Lord</h1>
                        <p>Auto generated text for description</p>
                    </div>
                </div>
                <div className="column-one">
                    <div className="123"></div>
                    <div>
                        <h1>Radar Chart</h1>
                        <RenderRadarChart data={programmingData}/>
                    </div>
                </div>
                <div className="column-one">
                    <div className="123"></div>
                    <div>
                        <h1>Bar Chart</h1>
                        <RenderSimpleBarChart data={experienceData}/>
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
                        <div className="123"></div>
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
                    <div className="background-color-one"></div>
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
                    <div className="123"></div>
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
                    <div className="background-color-one"></div>
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
                    <div className="123"></div>
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
                    <div className="background-color-one"></div>
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
