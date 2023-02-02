import Button from "./button";
import MenuItem from "./menuItem";

export default function TopNav() {

    const getMenu = () => {
        return (
            <ul>  
                <MenuItem item={{title: 'Home', link: '/'}}/>
                <MenuItem item={{title: 'Works', link: '/works'}}/>          
                <MenuItem item={{title: 'Services', link: '/services'}}/>
                <MenuItem item={{title: 'About', link: '/about'}}/>        
                <MenuItem item={{title: 'Blog', link: '/blog'}}/>  
                <MenuItem item={{title: 'Contact', link: '/contact'}}/>    
            </ul>
        )
    }

    const getButton = () => {
        return (
            <Button />
        )
    }

    return (
        <div className="navigation">
            <div className="navItem">
                <p>Logo Image</p>
            </div>
            <div className="navItem navDesktop">
                {getMenu()}

            </div>
            <div className="navItem navButton">
                {getButton()}
            </div>
            <div className="navItem navMobile">
                {getMenu()}
                {getButton()}
            </div>
        </div>
    );
}