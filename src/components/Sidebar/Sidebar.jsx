import styles from "./Sidebar.module.css"
import Logo from "../Logo/Logo.jsx"
import AppNav from "../AppNav/AppNav.jsx"
import Footer from "../Footer/Footer.jsx"
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>list of cities</p>

      <Footer />
    </div>
  )
}

export default Sidebar
