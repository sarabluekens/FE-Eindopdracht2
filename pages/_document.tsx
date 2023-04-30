import Footer from '<pages>/components/Footer'
import Navbar from '<pages>/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-blue text-white">
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
