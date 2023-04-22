import Image from 'next/image'
import { useRouter } from 'next/router'

const project = () => {
  //  Id opvragen uit de url via de useRouter hook
  const router = useRouter()
  const { projectId } = router.query

  return (
    <>
      <p>Hello world {projectId}</p>
    </>
  )
}

export default project
