import styles from "./CityItem.module.css"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useCities } from "../../contexts/Cities.jsx"

CityItem.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date))

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities()
  const { CityName, emoji, date, id, position } = city

  function handleClick(e) {
    e.preventDfeault()
    deleteCity(id)
  }

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{CityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  )
}

export default CityItem
