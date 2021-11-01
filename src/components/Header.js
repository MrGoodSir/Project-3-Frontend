import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="Header">

            <Link to="/mobs">
                <h2>Mobs</h2>
            </Link>

        </header>
    )
}

export default Header;