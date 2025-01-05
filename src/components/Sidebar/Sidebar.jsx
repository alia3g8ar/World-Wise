import styles from "./Sidebar.module.css"
import Logo from "../Logo/Logo.jsx"
import AppNav from "../AppNav/AppNav.jsx"
import Footer from "../Footer/Footer.jsx"
import { Outlet } from "react-router-dom"
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Sidebar
