import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { RxHamburgerMenu } from 'react-icons/rx'

import NavItem from './NavItem'
const HamburgerMenu = () => (
  <div className="relative rounded-md bg-blue p-2">
    <Menu
      customBurgerIcon={<RxHamburgerMenu size={24} />}
      width={'auto'}
      className="left-0 top-12"
    >
      <ul className="pt-1O m-5 hidden flex-row items-center p-4 ">
        <NavItem href="/#AboutMe" active={false} text="About" />
        <NavItem href="/#projects" active={false} text="Projects" />
        <NavItem href="/contact" active={false} text="Contact" />
      </ul>
    </Menu>
  </div>
)

const HamburgerIcon = () => {
  return (
    <div className="p-1/2">
      <svg
        className="text-gray-500 h-8 w-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  )
}

export default HamburgerMenu
