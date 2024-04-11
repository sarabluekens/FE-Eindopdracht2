import Image from 'next/image'
import GradientButton from './GradientButton'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'
import OutlineButton from './OutlineButton'
const ProjectList = ({
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
  const [isShown, setIsShown] = useState(false)

  return (
    <section className="m-2 mx-1 md:mx-5 ">
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={`relative overflow-hidden rounded-lg border border-white ${
          isShown ? 'background-animate bg-gradient1' : ''
        } `}
      >
        <Image
          className={`w-full overflow-hidden rounded-lg  ${
            isShown ? 'animate-slideOut' : 'animate-slideIn'
          }`}
          src={`/${promoImage}.png`}
          width={500}
          height={300}
          alt={promoAlt}
        />

        <div className=" absolute top-0 flex h-full flex-col justify-between">
          <h3
            className={` font-londrinaSolid text-subtitle font-thin  tracking-londrina md:mb-5 md:text-thirdTitle lg:mt-1 lg:text-title ${
              isShown ? ' mx-4 animate-appear pt-2 md:px-8 md:py-4' : 'hidden'
            }`}
          >
            {title}
          </h3>
          <p
            className={` font-sans text-mono self text-sm tracking-mono md:text-normal ${
              isShown ? '  animate-appear mx-4 md:px-8' : 'hidden'
            }`}
          >
            {promoText}
          </p>

          <div className={` ${isShown ? 'animate-appear md:mx-12' : 'hidden'}`}>
            <OutlineButton
              link={`/projects/${id}`}
              text="to Case file"
              color="blue"
            />
          </div>

          <section
            className={` flex items-center justify-center self-end ${
              isShown ? 'animate-appear p-4' : 'hidden'
            }`}
          >
            <h4 className="${ font-londrinaSolid  text-subtitle font-thin tracking-londrina              ">
              Check it out:
            </h4>
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
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProjectList
