import Image from 'next/image'
import NavItem from './NavItem'
import Link from 'next/link'
import HamburgerMenu from './Hamburger'
const Navbar = () => {
  return (
    <nav className="sticky top-28 z-50 flex h-0 items-center justify-between overflow-visible font-thin md:top-14">
      <Link href="/" className="m-14 hidden md:inline">
        <Image
          className="height-auto"
          src="/logo1.svg"
          alt="Logo Sara Bluekens brand"
          width={68}
          height={77}
        />
      </Link>

      <ul className="m-5 hidden md:flex ">
        <NavItem href="/#AboutMe" active={false} text="About" />
        <NavItem href="/#projects" active={false} text="Projects" />
        <NavItem href="/contact" active={false} text="Contact" />
      </ul>

      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
