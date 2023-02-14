import Menu from "./menu";

export default function BottomNav() {

    return (
        <div className="bg-color-dark-blue">
            <div className="container  nav-bottom-container">
                <div className="column-two-even">
                    <div></div>
                    <div className="nav-bottom">
                        <p>Copyright &copy; 2023 Derek Lord. All Rights Reserved.</p>
                    </div>
                    <div className="nav-bottom-menu">
                        <Menu />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

