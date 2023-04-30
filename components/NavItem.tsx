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
    <li className="px-3">
      <Link href={href} className={`nav__item ${active ? 'active' : ''} `}>
        <p className="font-londrinaSolid text-nav tracking-londrina">{text}</p>
      </Link>
    </li>
  )
}

export default NavItem
