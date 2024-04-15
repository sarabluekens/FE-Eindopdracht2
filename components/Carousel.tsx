import { useState } from 'react'
import { slide } from 'react-burger-menu'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Carousel = ({ images }: { images: Array<string> }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevItem = () => {
    const isFirstSlide = currentIndex === 0
    const nextIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(nextIndex)
  }
  const nextItem = () => {
    const isLastSlide = currentIndex === images.length - 1
    const nextIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  return (
    <section className="group absolute h-[50vh] w-full object-fill px-8 py-4">
      <div
        style={{ backgroundImage: `url(/${images[currentIndex]}.png)` }}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      >
        {/* left arrow */}
        <div className="text-2xl absolute left-5 top-1/2 -translate-x-0 -translate-y-1/2  cursor-pointer rounded-full bg-blue p-2 text-white group-hover:block lg:hidden">
          <BsArrowLeft onClick={prevItem} className="text-4xl text-white" />
        </div>

        {/* right arrow */}
        <div className="text-2xl absolute right-5 top-1/2 -translate-x-0 -translate-y-1/2  cursor-pointer rounded-full bg-blue p-2 text-white group-hover:block lg:hidden">
          <BsArrowRight onClick={nextItem} className="text-4xl text-white" />
        </div>

        <div className="left-1/2 flex h-full items-end justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-2 h-2 w-2 cursor-pointer rounded-full ${
                currentIndex === index ? 'bg-white' : 'border-2 border-white'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
