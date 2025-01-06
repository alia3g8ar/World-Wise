import styles from "./CityItem.module.css"
import PropTypes from "prop-types"

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
  const { CityName, emoji, date } = city

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{CityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  )
}

export default CityItem
