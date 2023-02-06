import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeStatus } from '../features/checkbox/checkboxSlice';

// Maybe we could change this to a single prop instead of two

export default function MenuItem(props) {
    let title = props.item.title;
    let link = props.item.link;
    const dispatch = useDispatch();



    return (
        <Link to={link} >
            <div className="menu-item" onClick={() => dispatch(changeStatus())}>
                <p>{title}</p>
            </div>
        </Link>
    );
}