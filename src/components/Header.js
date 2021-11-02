import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="header">
        <Link className="headerLink" to="/">
          <div className="headerWordBorder">
          <h1 className="headerWord">A Minecraft Story</h1>
          </div>
        </Link>
    </header>
  )
}

export default Header;