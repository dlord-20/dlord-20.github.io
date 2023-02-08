import { useDispatch } from "react-redux";
import Button from "./button";
import Menu from "./menu";
import { changeStatus } from "../features/checkbox/checkboxSlice";

// NEED TO ADD WHEN YOU CLICK ON THE MENU IT CLOSES THE MOBILE MENU

export default function TopNav() {
    const dispatch = useDispatch();
    
    const getButton = () => {
        return (
                <Button text="Let's Talk" type="a"/>
        )
    }

    return (
        <div className="navigation">
            <div className="nav-item">
                <p>Logo Image</p>
            </div>
            <div className="nav-item nav-desktop">
                <Menu/>
            </div>
            <div className="nav-item nav-button">
                {getButton()}
            </div>
            <div className="nav-item nav-mobile" id="sidebar-mobile">
                <input type="checkbox" id="checkbox" className="toggler" onClick={() => dispatch(changeStatus()) }></input>
                <div className="hamburger"><div></div></div>
                <div className="menu" id="sidebar-menu">
                    <div className="menu-container" id="sidebar-nav">
                        <Menu/>
                        {getButton()}
                    </div>
                </div>
            </div>
        </div>
    );
}
