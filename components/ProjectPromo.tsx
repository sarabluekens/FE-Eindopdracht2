import Image from 'next/image'

const ProjectPromo = ({
  title,
  promoText,
  promoImage,
  promoAlt,
}: {
  title: string
  promoText: string
  promoImage: string
  promoAlt: string
}) => {
  return (
    <section>
      <Image
        src={`${promoImage}.png`}
        width={562}
        height={349}
        alt={promoAlt}
      />
      <h2>{title}</h2>
      <p>{promoText}</p>
      <button>Case File</button>
    </section>
  )
}

export default ProjectPromo
