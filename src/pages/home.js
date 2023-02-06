import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button";
import { changeStatus, selectStatus } from "../features/checkbox/checkboxSlice";

export default function Home() {
    const checkboxStatus = useSelector(selectStatus);
    const dispatch = useDispatch();

    const handleCheckboxClick = (event) => {
        dispatch(changeStatus());
        if(checkboxStatus) {
            document.getElementById("checkbox").checked = false;
            event.target.classList.remove("checkbox-hidden");
        } else {
            document.getElementById("checkbox").checked = true;
            event.target.classList.add("checkbox-hidden");
        }
    }

    const getMenuBackground = () => {
        if(checkboxStatus) {
            return (
                <div class="checkbox-hidden" id="checkbox-hidden" onClick={(event) => handleCheckboxClick(event)}></div>
            )
        } else {
            return null;
        }
    };

    return (
            <div className="container">
                <Helmet>
                    <title>Home Title</title>
                </Helmet>
                <div className="column-one background-img-1 full-width">
                    <h1>Derek Lord</h1>
                    <p>Auto generated text for description</p>
                </div>
                {getMenuBackground()}
                <div className="column-two-even space-below">
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
