import { Link } from 'react-router-dom';

// Maybe we could change this to a single prop instead of two

export default function MenuItem(props) {
    let title = props.item.title;
    let link = props.item.link;

    return (
        <Link to={link} >
            <div className="menu-item">
                <p>{title}</p>
            </div>
        </Link>
    );
}