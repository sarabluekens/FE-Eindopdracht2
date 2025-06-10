import Image from 'next/image'
import ProjectPromo from '../components/ProjectPromo'
import PromoHeader from '../components/PromoHeader'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OutlineButton from '../components/OutlineButton'

const Home = ({ data }: { data: any }) => {
  const [profilepicture, setProfilepicture] = useState('/profileLarge.png')

  useEffect(() => {
    if (window.innerWidth < 640) {
      //phone
      setProfilepicture('/profileSmall.png')
    } else if (window.innerWidth >= 640 && window.innerWidth < 1280) {
      //tablet
      setProfilepicture('/profileLarge.png')
    } else {
      //desktop
      setProfilepicture('/profileMedium.png')
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="m-0 flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
        <Hero />

        <main>
          <article className="mx-12 my-4 flex flex-col-reverse items-center justify-around md:mx-28 md:my-4 lg:mx-4 lg:my-16 lg:flex-row lg:justify-center">
            <div className="ml-4 md:w-11/12 lg:w-5/12">
              <h2 className="font-londrinaSolid text-smallTitle font-thin tracking-londrina md:text-title">
                About me
              </h2>
              <p className=" -mt-2 mb-8 font-londrinaSolid text-subtitle font-thin tracking-londrina text-grey">
                A Belgian creative soul
              </p>

              <p className=" mb-4 font-normal tracking-mono md:text-normal ">
                I'm a{' '}
                <span className="bg-darkGradient3 font-semibold">
                  full-stack developer
                </span>{' '}
                with a love for UX/UI and creative development.
              </p>
              <p className="mb-4 font-normal tracking-mono md:text-normal ">
                I currently live in Flandres, but who knows where the future
                will take me!
              </p>
              <p className="mb-4 font-normal tracking-mono md:text-normal">
                Creativity and experimenting is very important to me.{' '}
                <span className="bg-darkGradient2 font-semibold">
                  I love being challenged
                </span>{' '}
                and racking my brain solving puzzles.
              </p>

              <p className="mb-4 font-normal tracking-mono md:text-normal ">
                In my spare time you can find me{' '}
                <span className="bg-darkGradient1 font-semibold">
                  creating stuff
                </span>
                , in the broad sense of the word. I dabble with sketching,
                painting, sculpting, wood crafts, illustrations, animations, 3D
                modelling, games, installations... As long as i can be creative.
              </p>
            </div>
            <div className="lg:ml-6 lg:w-5/12 xl:w-4/12">
              <Image
                className="m-auto my-4 w-4/5 opacity-80 md:w-9/12 lg:h-full lg:w-full"
                src={profilepicture}
                alt="profilepicture"
                width={600}
                height={148}
                quality={100}
              />
            </div>
          </article>

          {/* star Projects */}
          <article id="projects" className=" mx-8 md:mx-28 md:my-4 ">
            <PromoHeader title="Star Project" />
            <section className="grid-rows-auto grid grid-cols-1 gap-2">
              <h2 className="hidden">Star Project</h2>
              {data.map(
                (project: any) =>
                  project.projectType === 'star' && (
                    <ProjectPromo
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      promoImage={project.promoImage}
                      promoText={project.promoText}
                      promoAlt={project.promoAlt}
                      codeLink={project.codeLink}
                      externalLink={project.externalLink}
                    />
                  ),
              )}
            </section>
          </article>
          <div className="my-8 w-full md:my-4 lg:my-8 ">
            <ThirdButton link="/projects" text="View all projects" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home

import { getLocalData } from '../lib/localdata'
import { useEffect, useState } from 'react'
import ThirdButton from '<pages>/components/thirdButton'

export const getStaticProps = async () => {
  const data = await getLocalData()
  //return the data
  return {
    props: {
      data,
    },
  }
}
