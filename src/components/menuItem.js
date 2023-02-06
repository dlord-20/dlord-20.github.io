import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeStatus, selectStatus } from '../features/checkbox/checkboxSlice';

// NEED TO FIX THIS SO IT IS ONLY CHANGING STATE WHEN IT IS IN MOBILE VIEW MENU (Not bottom either)

export default function MenuItem(props) {
    let title = props.item.title;
    let link = props.item.link;
    const dispatch = useDispatch();
    const checkboxStatus = useSelector(selectStatus)

    const handleCheckboxClick = (event) => {
        const isTopNav = event.target.parentNode.parentNode.parentNode.parentNode.id;;
        if(isTopNav === 'sidebar-nav' || isTopNav === 'sidebar-menu' || isTopNav === 'sidebar-mobile') {
            dispatch(changeStatus());
            if(checkboxStatus) {
                document.getElementById("checkbox").checked = false;
            } else {
                document.getElementById("checkbox").checked = true;
            }
        }
    };

    return (
        <Link to={link}  onClick={ (event) => handleCheckboxClick(event) }>
            <div className="menu-item">
                <p>{title}</p>
            </div>
        </Link>
    );
}