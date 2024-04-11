import Link from 'next/link'

const OutlineButton = ({
  link,
  text,
  color,
}: {
  link: string
  text: string
  color: string
}) => {
  return (
    <Link
      className={`flex h-auto w-1/2 m-auto rounded-md border ${
        color === 'light' ? ' border-grey' : 'border-blue'
      } active:h-14 active:translate-x-2 active:translate-y-2 active:p-0 `}
      href={link}
    >
      <div
        className={`flex h-full w-full -translate-x-2 translate-y-2 items-center justify-center rounded-md border ${
          color === 'light' ? ' border-grey' : 'border-blue'
        } font-londrinaSolid text-subtitle font-thin tracking-londrina `}
      >
        <p className="p-4">{text}</p>
      </div>
    </Link>
  )
}

export default OutlineButton
