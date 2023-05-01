import Image from 'next/image'
import ProjectPromo from '../components/ProjectPromo'
import PromoHeader from '../components/PromoHeader'
import Hero from '../components/Hero'

const Home = ({ data }: { data: any }) => {
  return (
    <div className="m-0 flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <main>
        <article className="mx-12 my-24 flex flex-col-reverse content-center justify-around md:mx-28 md:my-32 lg:flex-row">
          <div className="w-11/12 lg:w-5/12">
            <h2 className="font-londrinaSolid  text-smalltitle font-thin tracking-londrina md:text-title">
              About me
            </h2>
            <p className=" -mt-2 mb-8 font-londrinaSolid text-subtitle font-thin tracking-londrina text-grey">
              A Belgian creative soul
            </p>

            <p className=" font-sans mb-4 tracking-mono md:text-normal ">
              I'm (about to be){' '}
              <span className="font-thin"> a full stack developer </span> with a
              love for design and UX/UI.
            </p>
            <p className="font-sans mb-4 tracking-mono md:text-normal ">
              I currently study in Flandres, but who knows where the future will
              take me!
            </p>
            <p className="font-sans mb-4 tracking-mono md:text-normal">
              Creativity and experimenting is very important to me.
              <span className="font-thin"> I love being challenged </span>
              and racking my brain solving puzzles.
            </p>

            <p className="font-sans mb-4 tracking-mono md:text-normal ">
              In my spare time you can find me
              <span className="font-thin"> creating stuff </span>, in the broad
              sense of the word. I dabble with sketching, painting, sculpting,
              wood crafts, illustrations, animations, 3D modelling, games,
              installations... As long as i can be creative.
            </p>
          </div>
          <div>
            <Image
              className="m-5 opacity-80"
              src="/profile.png"
              alt="profilepicture"
              width={600}
              height={148}
              quality={100}
            />
          </div>
        </article>

        <article
          id="projects"
          className=" mx-8 my-16 flex flex-col justify-between md:mx-28 md:my-32 "
        >
          <PromoHeader title="My projects" />
          {data.map(
            (project: any) =>
              project.projectType === 'career' && (
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
        </article>

        <article
          id="hobbyProjects"
          className=" mx-8 my-16 flex flex-col justify-between md:mx-28 md:my-32 "
        >
          <PromoHeader title="Hobby projects" />
          {data.map(
            (project: any) =>
              project.projectType === 'hobby' && (
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
        </article>
      </main>
    </div>
  )
}

export default Home

import { getLocalData } from '../lib/localdata'

export const getStaticProps = async () => {
  const data = await getLocalData()
  //return the data
  return {
    props: {
      data,
    },
  }
}
