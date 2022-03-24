import perfil from '../../assets/perfil.png';

const NavLinks = (props) => {
    return (
        <div className="menuContainer">
        <h1 className="menuNav">MenuNav</h1>
            <ul className="Nav">
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/#">Contact</a>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/#">About</a>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a href="/#">News</a>
                </li>
            </ul>

            <img className='perfil' src={perfil} alt="User" />
        </div>
    )
}

export default NavLinks;