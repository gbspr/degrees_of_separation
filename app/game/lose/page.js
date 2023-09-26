import Link from "next/link";

const Lose = () => (
  <div>
    <h2> oh no! you lost! </h2>
    <Link href="/"> Restart game </Link>
  </div>
)

export default Lose;