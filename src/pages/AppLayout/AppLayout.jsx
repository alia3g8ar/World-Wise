import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import styles from "./AppLayout.module.css"
import Map from "../../components/Map/Map.jsx"
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayout
