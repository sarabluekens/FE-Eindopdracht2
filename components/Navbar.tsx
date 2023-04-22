import Link from 'next/link'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavItem href="/" active={false} text="Home" />

        <ul>
          <li>
            <NavItem href="/about" active={false} text="about" />
          </li>
          <li>Projects</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
