import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { CiLinkedin } from 'react-icons/ci'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import Divider from './Divider'

const Footer = () => {
  return (
    <div className="mt-auto">
      <Divider />
      <footer className="grid grid-flow-row grid-rows-1 items-center justify-items-center sm:grid-cols-2 sm:grid-rows-2 md:my-10 md:grid-cols-4 lg:grid-cols-3 md:grid-rows-1">
        <Link
          href="mailto:sara.bluekens@skynet.be"
          className="font-londrinaSolid text-footer font-thin tracking-londrina lg:text-nav md:col-span-2 lg:col-span-1"
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
          <a className="mx-2" href="/cv_new.pdf" download>
            <BsFileEarmarkPdf size={24} />
          </a>
        </div>
        <p className="font-londrinaSolid text-footer font-thin tracking-londrina lg:text-nav">
          <span className="font-mono text-subtitle"> &#169; </span>2024
        </p>
      </footer>
    </div>
  )
}

export default Footer
