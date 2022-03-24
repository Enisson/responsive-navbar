import NavLinks from "./NavLinks";
import './navStyles.css';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import { useState } from "react";


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburguerIcon = <img className="Hamburguer" src={menu} alt="Menu" onClick={() => setOpen(!open)}/>

    const closeIcon = <img className="Hamburguer" src={close} alt="Menu" onClick={() => setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className="MobileNavigation">
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;