import Image from 'next/image'
import { useRouter } from 'next/router'
import GradientButton from './GradientButton'

const ProjectPromo = ({
  title,
  promoText,
  promoImage,
  promoAlt,
  id,
}: {
  title: string
  promoText: string
  promoImage: string
  promoAlt: string
  id: string
}) => {
  return (
    <section className="mx-5 my-20 flex flex-1 items-center justify-around">
      <div className="rounded-lg  border-2 border-white pb-2 pl-2">
        <Image
          className="-translate-x-7 translate-y-7 rounded-lg"
          src={`${promoImage}.png`}
          width={562}
          height={349}
          alt={promoAlt}
        />
      </div>
      <div className="w-1/3">
        <h3 className="mb-5 font-londrinaSolid text-title font-thin tracking-londrina">
          {title}
        </h3>
        <p className=" text-mono font-sans mb-14 w-4/5 text-normal tracking-mono tracking-mono">
          {promoText}
        </p>

        <div className="w-1/4">
          <GradientButton link={`/projects/${id}`} text="to Case file" />
        </div>
      </div>
    </section>
  )
}

export default ProjectPromo
