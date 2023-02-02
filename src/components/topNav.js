import Button from "./button";
import MenuItem from "./menuItem";

export default function TopNav() {

    const getNav = () => {
        return (
            <nav>  
                <MenuItem item={{title: 'Home', link: '/'}}/>
                <MenuItem item={{title: 'Works', link: '/works'}}/>          
                <MenuItem item={{title: 'Services', link: '/services'}}/>
                <MenuItem item={{title: 'About', link: '/about'}}/>        
                <MenuItem item={{title: 'Blog', link: '/blog'}}/>  
                <MenuItem item={{title: 'Contact', link: '/contact'}}/>    
            </nav>
        )
    }

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
                {getNav()}
            </div>
            <div className="nav-item nav-button">
                {getButton()}
            </div>
            <div className="nav-item nav-mobile">
                <input type="checkbox" className="toggler"></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div className="menu-container">
                        {getNav()}
                        {getButton()}
                    </div>
                </div>
            </div>
        </div>
    );
}