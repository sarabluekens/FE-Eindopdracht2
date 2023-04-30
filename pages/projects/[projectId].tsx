import { useRouter } from 'next/router'
import data from '../../json/data.json'
import Image from 'next/image'

const project = ({ projectInfo }: { projectInfo: any }) => {
  //  Id opvragen uit de url via de useRouter hook
  // const router = useRouter()
  // const projectId = router.query.projectId

  return (
    <>
      <h1> {projectInfo.title}</h1>
      <Image
        src={`/${projectInfo.promoImage}.png`}
        alt="projectafbeelding"
        width={900}
        height={900}
      />
      <p>{projectInfo.description}</p>
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

  console.log(projectInfo)

  return {
    props: {
      projectInfo,
    },
  }
}
