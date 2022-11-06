
const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <figure className="image__logo--wrapper">
                    <img src="./components/images/logo.jpg" alt="" />
                    <p>LOGO</p>
                </figure>
                <ul className="nav__link--lists">
                    <li>Movies</li>
                    <li>Trending</li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;