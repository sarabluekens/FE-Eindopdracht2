import Link from 'next/link'
const NavItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className="nav__item">
      <li className="mx-2 rounded-md px-3 py-2 hover:border hover:bg-opacity-20">
        <p className="font-londrinaSolid text-nav tracking-londrina">{text}</p>
      </li>
    </Link>
  )
}

export default NavItem
