import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className=" background-animate 
        flex
        h-screen
        w-screen
        flex-col
    items-center justify-center bg-gradient-to-r font-londrinaSolid"
    >
      <div className="-mt-20 flex flex-col">
        <h1 className="text-center text-smallTitle font-thin tracking-londrina md:text-title">
          Digital developer
        </h1>
        <Link
          href="/cv_new.pdf"
          download
          className="m-4 self-end rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-solid border-blue px-4 py-2 md:inline"
        >
          <p className="text-thin text-nav tracking-londrina text-blue ">
            Download CV
          </p>
        </Link>
      </div>
      <Image
        id="AboutMe"
        className="z-1 absolute bottom-1 h-auto w-10/12 justify-end md:-bottom-14"
        src="/heroName.svg"
        width="0"
        height="0"
        alt="Sara Bluekens naam"
        priority
      />
    </div>
  )
}

export default Hero
