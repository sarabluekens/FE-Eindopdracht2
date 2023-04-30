import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { CiLinkedin } from 'react-icons/ci'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import Divider from './Divider'

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className=" my-10 grid grid-flow-col grid-cols-3 grid-rows-2 content-center justify-items-center">
        <p className="font-londrinaSolid text-nav font-normal tracking-londrina">
          Sara Bluekens
        </p>
        <p className="font-londrinaSolid text-nav font-thin tracking-londrina">
          <span className="font-mono"> &#169; </span>2023
        </p>
        <p className="font-londrinaSolid text-nav font-thin tracking-londrina">
          Sara.bluekens@skynet.be
        </p>
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

        <p className=" font-londrinaSolid text-nav font-normal tracking-londrina">
          Howest MCT
        </p>
        <p className="font-londrinaSolid text-nav font-thin tracking-londrina">
          Frontend development
        </p>
      </footer>
    </>
  )
}

export default Footer
