import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavItem href="/" active={false} text="Home" />
        <ul>
          <NavItem href="/about" active={false} text="about" />
          <NavItem href="/projects" active={false} text="projects" />
          <NavItem href="/cv" active={false} text="cv" />
          <NavItem href="/contact" active={false} text="contact" />
        </ul>
      </nav>
    </>
  )
}

export default Navbar
