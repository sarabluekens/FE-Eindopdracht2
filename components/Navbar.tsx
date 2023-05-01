import Image from 'next/image'
import NavItem from './NavItem'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className="fixed z-50 w-full font-thin">
      <div className="justify-between md:flex md:items-center md:px-8">
        <div className="flex flex-row items-center justify-between pt-3 md:block md:pt-5 ">
          <Link href="/" className="m-3 pl-3 md:inline md:pl-1">
            <Image
              className="height-auto"
              src="/logo1.svg"
              alt="Logo Sara Bluekens brand"
              width={68}
              height={77}
            />
          </Link>

          {/* hamburger menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setNavbar(!navbar)}
              className="pr-10 outline-none transition-all duration-300 ease-in"
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`backdrop-blur-sm md:flex ${
            navbar ? 'block' : 'hidden'
          } md:mt-0 md:block md:pb-0`}
        >
          <ul className="m-5 flex flex-col items-end  md:flex-row ">
            <NavItem href="/#AboutMe" text="About" />
            <NavItem href="/#projects" text="Projects" />
            <NavItem href="/contact" text="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
