import Link from 'next/link'
const NavItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <li className="mx-2 rounded-md px-3 py-2 hover:border hover:bg-opacity-20">
      <Link href={href} className="nav__item">
        <p className="font-londrinaSolid text-nav tracking-londrina">{text}</p>
      </Link>
    </li>
  )
}

export default NavItem
