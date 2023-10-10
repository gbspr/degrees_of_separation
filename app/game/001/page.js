import CommonFilm from "@/app/components/commonFilm/commonFilm"
import { Suspense } from "react";
import Loading from "../loading";

const Game001 = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CommonFilm
        primary="leonardo dicaprio"
        secondary="mark ruffalo"
      />
    </Suspense>
  )
}
export default Game001;