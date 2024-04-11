import data from '../../json/data.json'
import Image from 'next/image'
import CaseBlock from '../../components/TextBlock'
import Link from 'next/link'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const project = ({ projectInfo }: { projectInfo: any }) => {
  return (
    <>
      <Navbar />
      <article className="flex flex-col items-center justify-center pt-5">
        <h1 className="my-5 pt-1 text-center font-londrinaSolid text-thirdTitle font-thin tracking-londrina md:pt-16 md:text-title">
          {projectInfo.title}
        </h1>
        <Image
          src={`/${projectInfo.promoImage}.png`}
          alt={projectInfo.promoAlt}
          width={1000}
          height={1000}
          quality={100}
          className="mb-10"
        />

        <div className="flex w-7/12 flex-wrap justify-center md:justify-start">
          {projectInfo.tags.map((tag: string) => (
            <div
              className="m-1 bg-gradient-to-r from-gradient1 via-gradient2 to-gradient3 p-1"
              key={tag}
            >
              <p className="text-white">{tag}</p>
            </div>
          ))}
          <div className=" mt-3 flex w-8/12 justify-end  md:mt-0">
            {projectInfo.codeLink && (
              <Link target="_blank" href={projectInfo.codeLink}>
                <FiGithub className="mx-2" size={24} color="#E4EFEE" />
              </Link>
            )}
            {projectInfo.externalLink && (
              <Link target="_blank" href={projectInfo.externalLink}>
                <FiExternalLink className="mx-2" size={24} color="#E4EFEE" />
              </Link>
            )}
          </div>
        </div>
        <section className="mb-10 w-9/12 md:w-7/12">
          <h3 className="hidden">Case file info</h3>
          {projectInfo.question && (
            <CaseBlock title="Question" text={projectInfo.question} />
          )}
          {projectInfo.solution && (
            <CaseBlock title="Solution" text={projectInfo.solution} />
          )}
          {projectInfo.role && (
            <CaseBlock title="Role" text={projectInfo.role} />
          )}
          {projectInfo.gameplay && (
            <CaseBlock title="Gameplay" text={projectInfo.gameplay} />
          )}
          {projectInfo.experiment && (
            <CaseBlock title="Experiment" text={projectInfo.experiment} />
          )}

          {projectInfo.result && (
            <CaseBlock title="Result" text={projectInfo.result} />
          )}
          {projectInfo.aftermath && (
            <CaseBlock title="Aftermath" text={projectInfo.aftermath} />
          )}
        </section>
      </article>
      <Footer />
    </>
  )
}

export default project

// Generate the possible paths for the static site
export const getStaticPaths = async () => {
  const ids = data.map((item: any) => item.id)
  const paths = ids.map((id: string) => ({
    params: { projectId: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

// Fetch the data for each path
export const getStaticProps = async (context: any) => {
  const projectInfo = data.find(
    (item: any) => item.id.toString() == context.params.projectId,
  )

  return {
    props: {
      projectInfo,
    },
  }
}
