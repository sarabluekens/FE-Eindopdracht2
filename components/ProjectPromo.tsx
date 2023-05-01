import Image from 'next/image'
import GradientButton from './GradientButton'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Link from 'next/link'
const ProjectPromo = ({
  title,
  promoText,
  promoImage,
  promoAlt,
  id,
  codeLink,
  externalLink,
}: {
  title: string
  promoText: string
  promoImage: string
  promoAlt: string
  id: string
  codeLink?: string
  externalLink?: string
}) => {
  return (
    <section className="mx-5 my-20 flex flex-1 items-center justify-around">
      <div className="rounded-lg  border-2 border-white pb-2 pl-2">
        <Image
          className="h-auto -translate-x-7 translate-y-7 rounded-lg "
          src={`/${promoImage}.png`}
          width={562}
          height={562}
          alt={promoAlt}
        />
      </div>
      <div className="w-1/3">
        <h3 className="mb-5 font-londrinaSolid text-title font-thin tracking-londrina">
          {title}
        </h3>
        <p className=" text-mono font-sans w-4/5 text-normal tracking-mono tracking-mono">
          {promoText}
        </p>

        <div className="my-5 flex w-2/3  justify-end">
          {codeLink && (
            <Link href={codeLink}>
              <FiGithub className="mx-2" size={24} color="#E4EFEE" />
            </Link>
          )}
          {externalLink && (
            <Link href={externalLink}>
              <FiExternalLink className="mx-2" size={24} color="#E4EFEE" />
            </Link>
          )}
        </div>
        <div className="w-1/4">
          <GradientButton link={`/projects/${id}`} text="to Case file" />
        </div>
      </div>
    </section>
  )
}

export default ProjectPromo
