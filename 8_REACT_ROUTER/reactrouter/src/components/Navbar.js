// 2 - links com react router

import './Navbar.css'
import { /*Link,*/ NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">HOME</Link>
        <Link to="/about">SOBRE</Link> */}
        <NavLink to="/" 
          //className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
        >HOME</NavLink>
        <NavLink to="/about">SOBRE</NavLink>
    </nav>
  )
}

export default Navbar