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
    <section className="m-2 mx-1">
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

        <div className=" absolute top-0 flex h-full flex-col justify-around md:justify-between">
          <h3
            className={` font-londrinaSolid text-subtitle font-thin tracking-londrina md:text-thirdTitle lg:mt-1 lg:text-title ${
              isShown ? ' mx-4 animate-appear pt-2 md:mx-8' : 'hidden'
            }`}
          >
            {/* div is needed for clamp class */}
            <div className="line-clamp-1">{title}</div>
          </h3>
          <div
            className={` font-sans text-mono self text-sm tracking-mono md:text-normal ${
              isShown ? 'mx-4 line-clamp-2 animate-appear md:px-1 md:text-sm' : 'hidden'
            }`}
          >
            <p className="line-clamp-2">{promoText}</p>
          </div>

          <div className={` ${isShown ? 'animate-appear md:mx-12' : 'hidden'}`}>
            <OutlineButton
              link={`/projects/${id}`}
              text="to Case file"
              color="blue"
            />
          </div>
          {/* external links (hidden on mobile -> visible in case file) */}
          <section
            className={` hidden items-center justify-center self-end  ${
              isShown ? ' animate-appear p-4 md:flex' : 'hidden'
            }`}
          >
            <h4 className="font-londrinaSolid  text-subtitle font-thin tracking-londrina md:text-sm">
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
