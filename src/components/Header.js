import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="header">
      <Link className="link" to="/">
        <div className="headerWordBorder">
          <h1 className="headerWord">Home</h1>
        </div>
      </Link>
    </header>
  )
}

export default Header;