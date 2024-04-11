import Divider from './Divider'

const PromoHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className="m-auto w-11/12 text-start font-londrinaSolid text-smallTitle md:text-title font-thin tracking-londrina">
        {title}
      </h2>
      <Divider />
    </div>
  )
}

export default PromoHeader
