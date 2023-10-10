import CommonFilm from "@/app/components/commonFilm/commonFilm"
import { Suspense } from "react";
import Loading from "../loading";

const Game001 = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CommonFilm
        primary="Leonardo DiCaprio"
        secondary="Mark Ruffalo"
      />
    </Suspense>
  )
}
export default Game001;