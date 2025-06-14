import PromoHeader from '../../components/PromoHeader'
import Navbar from '../../components/Navbar'
import ProjectList from '../../components/ProjectList'
import ProjectPromo from '../../components/ProjectPromo'

const Projects = ({ data }: { data: any }) => {
  return (
    <>
      <Navbar />
      <article id="projects" className=" px-4 pt-24 md:px-20 md:py-24 lg:py-4">
        <PromoHeader title="My projects" />
        <section className="grid-rows-auto m-4 grid gap-2 md:m-0 md:grid-cols-2 lg:m-16">
          <h2 className="hidden">Projects</h2>
          {data.map(
            (project: any) =>
              project.projectType === 'star' && (
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
      {/* Hobby Projects */}
      <article
        id="hobbyProjects"
        className=" mx-8 my-16 md:mx-28 md:my-32 lg:my-4 "
      >
        <PromoHeader title="Hobby projects" />
        <section className="grid-rows-auto m-4 grid gap-2 md:m-0 md:grid-cols-2 lg:m-16">
          <h2 className="hidden">Hobby Projects</h2>
          {data.map(
            (project: any) =>
              project.projectType === 'hobby' && (
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
