const PromoHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="m-auto w-11/12 text-start font-londrinaSolid text-title font-thin tracking-londrina">
        {title}
      </h2>
      <div className="mx-auto my-5 h-2 w-11/12 rounded-lg bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3"></div>
    </div>
  )
}

export default PromoHeader
