import { NavLink } from "react-router-dom";

function AppHeader() {
    const navLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/movies",
            title: "Movies"
        }
    ]
    return (
        <header>
            <nav className="navBar">
                <h3>Bool Movies</h3>
                <ul>
                    {
                        navLinks.map((curLink, index) => (
                            <li key={index}>
                                <NavLink to={curLink.path}>{curLink.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;