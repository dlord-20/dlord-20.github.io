import MenuItem from "./menuItem";

export default function Menu() {

    return (
        <nav>  
            <MenuItem item={{title: 'Home', link: '/'}}/>
            <MenuItem item={{title: 'Works', link: '/works'}}/>          
            <MenuItem item={{title: 'Services', link: '/services'}}/>
            <MenuItem item={{title: 'About', link: '/about'}}/>        
            <MenuItem item={{title: 'Blog', link: '/blog'}}/>  
            <MenuItem item={{title: 'Contact', link: '/contact'}}/>    
    </nav>
    );
}