import Link from 'next/link'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ThirdButton = ({ link, text }: { link: string; text: string }) => {
  const [hover, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`m-auto flex h-auto w-1/2 active:translate-x-2 active:translate-y-2 active:p-0 `}
      href={link}
    >
      <div
        className={` text-grey flex h-full w-full -translate-x-2 translate-y-2 items-center justify-center font-londrinaSolid text-smalltitle

        font-thin tracking-londrina ${
          hover ? 'underline decoration-1 underline-offset-8' : ''
        } `}
      >
        <p className="p-4">{text}</p>
        <BsArrowRight className={`${hover ? 'animate-arrow' : ''} `} />
      </div>
    </Link>
  )
}

export default ThirdButton
