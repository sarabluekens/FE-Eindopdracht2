import Image from 'next/image'
import { Londrina_Solid } from 'next/font/google'
import ProjectPromo from '../components/ProjectPromo'

const Home = ({ data }: { data: any }) => {
  return (
    <>
      <header className="font-londrinaSolid">
        <p className="font-thin">Web developer</p>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div
          className="
              background-animate
              h-screen
              w-screen
              bg-gradient-to-r
              from-pink-500
              via-red-500
              to-yellow-500
          "
        ></div>
        <article>
          <h2>About me</h2>
          <p className=""> A Belgian creative soul</p>

          <p>
            I'm (about to be) a full stack developer; with a love for design and
            UX/UI.
          </p>
          <p>
            I currently study in Flandres, but who knows where the future will
            take me!
          </p>
          <p>
            Creativity and experimenting is very important to me. I love being
            challenged and racking my brain solving puzzles.
          </p>

          <p>
            In my spare time you can find me creating stuff, in the broad sense
            of the word. I dabble with sketching, painting, sculpting, wood
            crafts, illustrations, animations, 3D modelling, games,
            installations... As long as i can be creative.{' '}
          </p>

          <Image
            src="/profile.png"
            alt="profilepicture"
            width={720}
            height={148}
          />
        </article>

        <article>
          <h2>My projects</h2>
          {data.map((project: any) => (
            <ProjectPromo
              key={project.id}
              title={project.title}
              promoImage={`/${project.promoImage}`}
              promoText={project.promoText}
              promoAlt={project.promoAlt}
            />
          ))}
        </article>
      </main>
    </>
  )
}

export default Home

import getLocalData from '../lib/localdata'

export const getStaticProps = async () => {
  const data = await getLocalData()
  //return the data
  return {
    props: {
      data,
    },
  }
}
