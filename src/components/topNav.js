import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../features/checkbox/checkboxSlice";
import Button from "./button";
import Menu from "./menu";
import { changeStatus } from "../features/checkbox/checkboxSlice";

export default function TopNav() {
    const checkboxStatus = useSelector(selectStatus);
    const dispatch = useDispatch()
    const getButton = () => {
        return (
                <Button text="Let's Talk" type="a"/>
        )
    }

    const handleCheckboxClick = () => {
        console.log('hi');
        dispatch(changeStatus());
        if(checkboxStatus) {
            document.getElementById("checkbox").checked = false;
        } else {
            document.getElementById("checkbox").checked = true;
        }
    }

    return (
        <div className="navigation">
            <div className="nav-item">
                <p>Logo Image</p>
            </div>
            {/* <div className="nav-bg"></div> */}
            <div className="nav-item nav-desktop">
                <Menu/>
            </div>
            <div className="nav-item nav-button">
                {getButton()}
            </div>
            <div className="nav-item nav-mobile">
                <input type="checkbox" id="checkbox" className="toggler" onClick={() => dispatch(changeStatus())}></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div className="menu-container">
                        <Menu/>
                        {getButton()}
                        <div className="breakout" onClick={() => handleCheckboxClick()}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
