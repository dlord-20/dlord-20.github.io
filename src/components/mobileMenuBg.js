import { useDispatch, useSelector } from "react-redux";
import { changeStatus, selectStatus } from "../features/checkbox/checkboxSlice";

export default function MobileMenuBg() {
    const checkboxStatus = useSelector(selectStatus);
    const dispatch = useDispatch();

    const handleCheckboxClick = (event) => {
        dispatch(changeStatus());
        if(checkboxStatus) {
            document.getElementById("checkbox").checked = false;
            event.target.classList.remove("checkbox-hidden");
        } else {
            document.getElementById("checkbox").checked = true;
            event.target.classList.add("checkbox-hidden");
        }
    };

    const getMenuBackground = () => {
        if(checkboxStatus) {
            return (
                <div class="checkbox-hidden" id="checkbox-hidden" onClick={(event) => handleCheckboxClick(event)}></div>
            )
        } else {
            return null;
        }
    };

    return (
        <div>
            {getMenuBackground()}
        </div>
    );
}

