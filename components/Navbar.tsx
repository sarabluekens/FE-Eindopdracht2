import Image from 'next/image'
import NavItem from './NavItem'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky top-14 flex h-0 items-center justify-between overflow-visible font-thin">
      <Link href="/" className="m-14">
        <Image
          src="/logo1.svg"
          alt="Logo Sara Bluekens brand"
          width={68}
          height={77}
        />
      </Link>

      <ul className="m-5 flex items-center">
        <NavItem href="/#AboutMe" active={false} text="About" />
        <NavItem href="/#projects" active={false} text="Projects" />
        <NavItem href="/contact" active={false} text="Contact" />
      </ul>
    </nav>
  )
}

export default Navbar
