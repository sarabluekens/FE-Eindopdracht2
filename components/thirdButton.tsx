import Link from 'next/link'
import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ThirdButton = ({ link, text }: { link: string; text: string }) => {
  const [hover, setHover] = useState(false)
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`m-auto flex rounded active:translate-x-1 active:translate-y-1 md:w-1/2 lg:w-2/3 lg:justify-end `}
      href={link}
    >
      <div
        className={` flex items-center  justify-center font-londrinaSolid text-smallTitle font-thin

        tracking-londrina text-grey ${
          hover
            ? 'underline decoration-2 underline-offset-8'
            : 'active:underline active:decoration-1 active:underline-offset-8'
        }  `}
      >
        <p className="p-4">{text}</p>
        <BsArrowRight className={`${hover ? 'animate-arrow' : ''} `} />
      </div>
    </Link>
  )
}

export default ThirdButton
