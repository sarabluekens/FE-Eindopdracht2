import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { CiLinkedin } from 'react-icons/ci'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import Divider from './Divider'

const Footer = () => {
  return (
    <div className="mt-auto">
      <Divider />
      <footer className=" my-10 grid grid-flow-col grid-cols-1 grid-rows-6 content-center justify-items-center sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
        <p className="font-londrinaSolid text-normal font-normal tracking-londrina lg:text-nav">
          Sara Bluekens
        </p>
        <p className="font-londrinaSolid  text-normal font-thin tracking-londrina lg:text-nav">
          <span className="font-mono"> &#169; </span>2023
        </p>
        <Link
          href="mailto:sara.bluekens@skynet.be"
          className="font-londrinaSolid  text-normal font-thin tracking-londrina lg:text-nav"
        >
          Sara.bluekens@skynet.be
        </Link>
        <div className="space-2 flex items-center p-2">
          <Link className="mx-2" href="https://www.instagram.com/sarabluekens/">
            <SlSocialInstagram size={24} />
          </Link>
          <Link
            className="mx-2"
            href="https://www.linkedin.com/in/sara-bluekens/"
          >
            <CiLinkedin size={30} />
          </Link>
          <a className="mx-2" href="/cv.pdf" download>
            <BsFileEarmarkPdf size={24} />
          </a>
        </div>

        <p className=" font-londrinaSolid text-normal font-normal tracking-londrina lg:text-nav">
          Howest MCT
        </p>
        <p className="font-londrinaSolid text-normal font-thin tracking-londrina  lg:text-nav">
          Frontend development
        </p>
      </footer>
    </div>
  )
}

export default Footer
