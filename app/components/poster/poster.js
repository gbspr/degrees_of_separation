const { default: Image } = require("next/image")

const Poster = ({ src, alt }) => {
  return (
    <div>
      <Image
        src={src}
        height={500}
        width={500}
        alt={alt}
      />
    </div>
  )
}

export default Poster;