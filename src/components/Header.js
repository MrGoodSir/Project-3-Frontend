import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="Header">
            <Link to="/home">
                <h1>Home</h1>
            </Link>
        </header>
    )
}

export default Header;