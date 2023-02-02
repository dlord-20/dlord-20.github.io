import Button from "./button";

export default function TopNav() {

    return (
        <div className="navigation">
            <div className="navItem">
                <p>Logo Image</p>
            </div>
            <div className="navItem">
                <ul>
                    <li>Home</li>
                    <li>Works</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navItem">
                <Button />
            </div>
        </div>
    );
}