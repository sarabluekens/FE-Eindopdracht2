const TextBlock = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <h3 className="mb-1 mt-10 font-londrinaSolid text-thirdTitle font-thin tracking-londrina text-grey">
        {title}
      </h3>
      <p className="font-sans text-sm font-thin tracking-mono md:text-normal">
        {text}
      </p>
    </div>
  )
}

export default TextBlock
