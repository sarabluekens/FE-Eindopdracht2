import Link from 'next/link'
import { transform } from 'typescript'

const OutlineButton = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link href={link}>
      <div>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default OutlineButton
