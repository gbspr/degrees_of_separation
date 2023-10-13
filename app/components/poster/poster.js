import { getPoster } from "@/app/utils/service";
const { default: Image } = require("next/image")

const Poster = async ({ imdbId, alt }) => {
  const posterSrc = await getPoster(imdbId);

  return (
    <div>
      <Image
        src={posterSrc}
        height={500}
        width={500}
        alt={alt}
      />
    </div>
  )
}

export default Poster;