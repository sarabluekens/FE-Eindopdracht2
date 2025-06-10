import Link from 'next/link'

const GradientButton = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      className=" flex h-16 w-52 justify-center rounded-md border-2 border-gradient3 border-opacity-20 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 pb-2 pl-0 pr-2 pt-0 active:h-14 active:translate-x-2 active:translate-y-2 active:p-0"
      // className="active:p1 flex h-16 w-52 justify-center rounded-md border-2 border-gradient3 border-opacity-20 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 pb-2 pl-0 pr-2 pt-0 active:h-14 active:translate-x-2 active:translate-y-2 active:p-0"
      href={link}
    >
      <div className="flex h-14 w-52 items-center justify-center rounded-md bg-blue font-londrinaSolid text-subtitle font-thin tracking-londrina">
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default GradientButton
