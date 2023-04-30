import Image from 'next/image'
import NavItem from './NavItem'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between font-thin m-5">
      <Link href="/">
        <Image
          src="logo1.svg"
          alt="Logo Sara Bluekens brand"
          width={68}
          height={77}
        />
      </Link>

      <ul className="flex ">
        <NavItem href="/About" active={false} text="About" />
        <NavItem href="/Projects" active={false} text="Projects" />
        <NavItem href="/Contact" active={false} text="Contact" />
      </ul>
    </nav>
  )
}

export default Navbar
