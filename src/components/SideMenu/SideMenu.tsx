import "./SideMenu.scss";
import { IoIosArrowBack } from "react-icons/io";
import { toggleActivate} from "../../features/activeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NavMenu from "../NavMenu";

function SideMenu() {
    const isActive = useAppSelector((state) => state.active.isActive);
    const dispatch = useAppDispatch();
    
    return (
        <>
            <div className={`side-menu-wrapper ${isActive ? 'active' : ''}`}>
                <NavMenu />

                <div className="side-menu-container">
                    <button
                        onClick={() => dispatch(toggleActivate())}
                        className={`side-menu-button ${isActive ? 'active' : ''}`}
                    >
                        <span className="icon">
                            <IoIosArrowBack />
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default SideMenu;