import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="Header">
            <Link to="/enemies">
                <h2>Home</h2>
            </Link>
        </header>
    )
}

export default Header;