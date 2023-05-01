const TextBlock = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <h3 className="font-londrinaSolid text-thirdtitle font-thin tracking-londrina text-grey mb-1 mt-10">
        {title}
      </h3>
      <p className="font-sans text-normal tracking-mono">{text}</p>
    </div>
  )
}

export default TextBlock
