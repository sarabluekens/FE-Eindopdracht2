import { useRouter } from 'next/router'
import data from '../../json/data.json'

const project = ({ projectInfo }: { projectInfo: any }) => {
  //  Id opvragen uit de url via de useRouter hook
  // const router = useRouter()
  // const projectId = router.query.projectId

  return (
    <>
      <p>Hello world {projectInfo.id}</p>
      <p>Project {projectInfo.language}</p>
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
