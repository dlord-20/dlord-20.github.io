import Menu from "./menu";

export default function BottomNav() {

    return (
        <div className="bottom-navigation">
            <div className="column-two-even">
                <div>
                    <p>Bottom Nav</p>
                    <p>Copyright &copy; 2023 Derek Lord. All Rights Reserved.</p>
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </div>
    );
}

