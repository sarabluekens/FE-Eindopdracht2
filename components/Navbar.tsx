import Image from 'next/image'
import NavItem from './NavItem'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <Image
            src="logo1.svg"
            alt="Logo Sara Bluekens brand"
            width={68}
            height={77}
          />
        </Link>

        <ul>
          <NavItem href="/About" active={false} text="about" />
          <NavItem href="/Projects" active={false} text="projects" />
          <NavItem href="/Cv" active={false} text="cv" />
          <NavItem href="/Contact" active={false} text="contact" />
        </ul>
      </nav>
    </>
  )
}

export default Navbar
