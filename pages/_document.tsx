import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-blue  text-white ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
