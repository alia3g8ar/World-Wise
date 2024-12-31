import { Link } from "react-router-dom"
import PageNav from "../components/PageNav.jsx"

function HomePage() {
  return (
    <>
      <PageNav />
      <h1>World Wise</h1>
      <Link to="/pricing">pricing</Link>
    </>
  )
}

export default HomePage
