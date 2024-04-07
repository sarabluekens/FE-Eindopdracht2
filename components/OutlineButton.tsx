import Link from 'next/link'

const OutlineButton = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      className=" flex h-auto w-1/2 rounded-md border border-blue active:h-14 active:translate-x-2 active:translate-y-2 active:p-0"
      href={link}
    >
      <div className="flex h-full w-full -translate-x-2 translate-y-2 items-center justify-center rounded-md border border-blue font-londrinaSolid text-subtitle font-thin tracking-londrina">
        <p className="p-4">{text}</p>
      </div>
    </Link>
  )
}

export default OutlineButton
