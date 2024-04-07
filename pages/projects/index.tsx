import PromoHeader from '../../components/PromoHeader'
import Navbar from '../../components/Navbar'
import ProjectList from '../../components/ProjectList'

const Projects = ({ data }: { data: any }) => {
  return (
    <>
      <Navbar />
      <article id="projects" className="px-20 py-24">
        <PromoHeader title="My projects" />
        <section className="grid-rows-auto m-16 grid w-2/3 grid-cols-2 gap-2">
          <h2 className="hidden">Projects</h2>
          {data.map(
            (project: any) =>
              project.projectType === 'career' && (
                <ProjectList
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  promoImage={project.promoImage}
                  promoText={project.promoText}
                  promoAlt={project.promoAlt}
                  codeLink={project.codeLink}
                  externalLink={project.externalLink}
                />
              ),
          )}
        </section>
      </article>
    </>
  )
}
export default Projects

import { getLocalData } from '../../lib/localdata'

export const getStaticProps = async () => {
  const data = await getLocalData()
  //return the data
  return {
    props: {
      data,
    },
  }
}
