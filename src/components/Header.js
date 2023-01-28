import { useState } from 'react'
import Logo from '../assets/img/foodvilla.png'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

const Title = () => (
  <a href="/">
    <img
      className="h-28 pl-2"
      alt="logo"
      src={Logo}
    />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isOnline = useOnline()

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? 'online' : 'offline'}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  )
}

export default Header
