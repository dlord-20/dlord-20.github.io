import Button from "./button";
import Menu from "./menu";

export default function TopNav() {

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
            {/* <div className="nav-bg"></div> */}
            <div className="nav-item nav-desktop">
                <Menu/>
            </div>
            <div className="nav-item nav-button">
                {getButton()}
            </div>
            <div className="nav-item nav-mobile">
                <input type="checkbox" className="toggler"></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div className="menu-container">
                        <Menu/>
                        {getButton()}
                        <div className="breakout"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
