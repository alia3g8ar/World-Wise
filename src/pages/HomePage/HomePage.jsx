import styles from "./Homepage.module.css"
import { Link } from "react-router-dom"
import PageNav from "../../components/PageNav/PageNav.jsx"
import SplitText from "../../components/SplitText/SplitText.jsx"

export default function Homepage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!")
  }

  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          <SplitText
            text="You travel the world."
            className="text-2xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  )
}
