import Image from 'next/image'
import ProjectPromo from '../components/ProjectPromo'

const Home = ({ data }: { data: any }) => {
  return (
    <div className="m-0 flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <header
        className="background-animate 
              flex
              h-screen
              w-screen
              flex-col
          items-center justify-center bg-gradient-to-r font-londrinaSolid"
      >
        <div className=" -mt-20 flex flex-col">
          <p className="text-title font-thin tracking-londrina">
            Digital developer
          </p>
          <Link
            href="/Contact"
            className="self-end rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-solid border-blue px-4 py-2"
          >
            <p className="text-thin text-nav tracking-londrina text-blue">
              Contact
            </p>
          </Link>
        </div>
        <Image
          id="AboutMe"
          className="absolute -bottom-14 justify-end"
          src="/heroName.svg"
          width={1400}
          height={470}
          alt="Sara Bluekens naam"
        />
      </header>
      <main>
        <article className="mx-28 my-32 flex justify-around">
          <div className="w-5/12">
            <h2 className="font-londrinaSolid text-title font-thin tracking-londrina">
              About me
            </h2>
            <p className=" -mt-2 mb-8 font-londrinaSolid text-subtitle font-thin tracking-londrina text-grey">
              A Belgian creative soul
            </p>

            <p className=" font-sans mb-4 text-normal tracking-mono ">
              I'm (about to be) a full stack developer; with a love for design
              and UX/UI.
            </p>
            <p className="font-sans mb-4 text-normal tracking-mono ">
              I currently study in Flandres, but who knows where the future will
              take me!
            </p>
            <p className="font-sans mb-4 text-normal tracking-mono">
              Creativity and experimenting is very important to me. I love being
              challenged and racking my brain solving puzzles.
            </p>

            <p className="font-sans mb-4 text-normal tracking-mono ">
              In my spare time you can find me creating stuff, in the broad
              sense of the word. I dabble with sketching, painting, sculpting,
              wood crafts, illustrations, animations, 3D modelling, games,
              installations... As long as i can be creative.{' '}
            </p>
          </div>
          <div>
            <Image
              className="opacity-80"
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
          className="mx-28 my-32 flex flex-col justify-between "
        >
          <PromoHeader title="My projects" />
          {data.map((project: any) => (
            <ProjectPromo
              key={project.id}
              id={project.id}
              title={project.title}
              promoImage={`/${project.promoImage}`}
              promoText={project.promoText}
              promoAlt={project.promoAlt}
            />
          ))}
        </article>
      </main>
    </div>
  )
}

export default Home

import getLocalData from '../lib/localdata'
import Link from 'next/link'
import PromoHeader from '<pages>/components/PromoHeader'

export const getStaticProps = async () => {
  const data = await getLocalData()
  //return the data
  return {
    props: {
      data,
    },
  }
}
