import Link from 'next/link'
const NavItem = ({
  text,
  href,
  active,
}: {
  text: string
  href: string
  active: boolean
}) => {
  return (
    <li className="rounded-md px-3 py-2 hover:border hover:bg-opacity-20">
      <Link href={href} className={`nav__item ${active ? 'active' : ''}`}>
        <p className="font-londrinaSolid text-nav tracking-londrina">{text}</p>
      </Link>
    </li>
  )
}

export default NavItem
