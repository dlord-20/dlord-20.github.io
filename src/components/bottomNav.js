import Menu from "./menu";

export default function BottomNav() {

    return (
        <div className="bottom-navigation">
            <div className="inner-container">
                <div className="bottom-nav">
                    <div className="left-column">
                        <p>Bottom Nav</p>
                        <p>Copyright &copy; 2023 Derek Lord. All Rights Reserved.</p>
                    </div>
                    <div className="right-column">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    );
}