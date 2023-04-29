import Image from 'next/image'
import { Londrina_Solid } from 'next/font/google'
import Navbar from '../components/Navbar'
import getLocalData from '../lib/localdata'

const londrinaSolid = Londrina_Solid({
  subsets: ['latin'],
  weight: ['100', '300', '400', '900'],
})

const Home = ({ data }: { data: [] }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <Navbar />
      </nav>

      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <section>
        <h2>Blog</h2>
        {/* <ul>
          {data.map(
            ({
              id,
              name,
              language,
            }: {
              id: number
              name: string
              language: string
            }) => (
              <li key={id}>
                <b>
                  {id} - {name}
                </b>
                <br />
                {language}
              </li>
            ),
          )}
        </ul> */}
      </section>
    </main>
  )
}

export default Home

// export const getStaticProps = async () => {
//   //fetch the data from the local json file
//   const data = await getLocalData()

//   //return the data as props (object) in the home component
//   return {
//     props: {
//       data,
//     },
//   }
// }
