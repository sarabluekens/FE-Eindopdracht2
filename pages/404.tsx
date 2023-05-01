import Navbar from '<pages>/components/Navbar'
import Image from 'next/image'
const pageNotFound = () => {
  return (
    <div className="max-h-full overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <div
        className="background-animate 
        flex
        h-screen
        w-screen
        flex-col
    items-center justify-evenly bg-gradient-to-r font-londrinaSolid"
      >
        <div className="-mt-20 flex flex-col">
          <h1 className="title text-start text-sm font-thin tracking-londrina md:text-subtitle">
            Oops. We're still looking for this one.
          </h1>
        </div>
        <Image
          id="AboutMe"
          className="z-1 absolute bottom-1 mb-11 h-auto w-7/12 justify-end md:-bottom-14"
          src="/error.svg"
          width="0"
          height="0"
          alt="Sara Bluekens naam"
          priority
        />
      </div>
    </div>
  )
}

export default pageNotFound
