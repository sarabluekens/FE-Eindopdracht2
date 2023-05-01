import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <header
      className="background-animate 
        flex
        h-screen
        w-screen
        flex-col
    items-center justify-center bg-gradient-to-r font-londrinaSolid"
    >
      <div className=" -mt-20 flex flex-col">
        <h1 className="text-title font-thin tracking-londrina">
          Digital developer
        </h1>
        <Link
          href="/cv.pdf"
          download
          className="self-end rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-solid border-blue px-4 py-2"
        >
          <p className="text-thin text-nav tracking-londrina text-blue">
            Download CV
          </p>
        </Link>
      </div>
      <Image
        id="AboutMe"
        className="z-1 absolute -bottom-14 justify-end"
        src="/heroName.svg"
        width={1400}
        height={470}
        alt="Sara Bluekens naam"
      />
    </header>
  )
}

export default Hero
