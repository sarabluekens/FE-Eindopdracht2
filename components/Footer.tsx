import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { CiLinkedin } from 'react-icons/ci'
import { BsFileEarmarkPdf } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <p> Sara Bluekens</p>
      <p> &#169; 2023</p>

      <p>Sara.bluekens@skynet.be</p>
      <div>
        <Link href="https://www.instagram.com/sarabluekens/">
          <SlSocialInstagram size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/sara-bluekens/">
          <CiLinkedin size={24} />
        </Link>

        <a href="/cv.pdf" download>
          <BsFileEarmarkPdf size={24} />
        </a>
      </div>

      <p>Howest MCT</p>
      <p>Frontend development</p>
    </footer>
  )
}

export default Footer
