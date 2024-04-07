import Image from 'next/image'
import GradientButton from './GradientButton'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'
const ProjectList
 = ({
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
  const [isShown, setIsShown] = useState(false);
  
  return (
    <section className="mx-1 my-2 md:mx-5">
      <div onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      className="min-h-max rounded-lg border border-white pb-2 pl-2 hover:bg-gradient1 hover:animate-gradient">
       {!isShown && ( 
         <Image
          className=" w-full -translate-x-4 translate-y-4 rounded-lg md:-translate-x-3 md:translate-y-3 "
          src={`/${promoImage}.png`}
          width={500}
          height={300}
          alt={promoAlt}
        />
         )}
        {isShown && (
            <div className='gradient'>
            </div>
         )}
      </div>
      <div className="ml-5 lg:ml-10 lg:w-1/3">
        <h3 className="mt-10 hidden font-londrinaSolid text-thirdtitle  font-thin tracking-londrina md:mb-5 lg:mt-1 lg:text-title">
          {title}
        </h3>
        <p className=" text-mono font-sans hidden w-4/5 text-sm tracking-mono md:text-normal ">
          {promoText}
        </p>

        {/* Show on hover */}
        {isShown && (
        <>
            <div className="my-5  w-2/3 justify-end">
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
            <div className=" w-1/4">
                <GradientButton link={`/projects/${id}`} text="to Case file" />
            </div>
        </>
        )} 
      </div>
    </section>
  )
}

export default ProjectList

