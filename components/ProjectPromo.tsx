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
    <section className="mx-1 my-20 flex flex-1 flex-col items-center justify-around md:mx-5 lg:flex-row">
      <div className="rounded-lg border-2 border-white pb-2 pl-2">
        <Image
          className="h-auto -translate-x-4 translate-y-4 rounded-lg md:-translate-x-7 md:translate-y-7 "
          src={`/${promoImage}.png`}
          width={562}
          height={562}
          alt={promoAlt}
        />
      </div>
      <div className="ml-5 lg:ml-10 lg:w-1/3">
        <h3 className="mt-10 font-londrinaSolid text-thirdtitle font-thin  tracking-londrina md:mb-5 lg:mt-1 lg:text-title">
          {title}
        </h3>
        <p className=" text-mono font-sans w-4/5 text-sm tracking-mono md:text-normal ">
          {promoText}
        </p>

        <div className="my-5 flex w-2/3  justify-end">
          {codeLink && (
            <Link target="_blank" href={codeLink}>
              <FiGithub className="mx-2" size={24} color="#E4EFEE" />
            </Link>
          )}
          {externalLink && (
            <Link target="_blank" href={externalLink}>
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
