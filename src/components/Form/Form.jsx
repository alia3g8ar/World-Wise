// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react"

import styles from "./Form.module.css"
import Button from "../Button/Button.jsx"
import BackButton from "../BackButton/BackButton.jsx"
import useUrlPosition from "../../hooks/useUrlPosition.js"
import error from "eslint-plugin-react/lib/util/error.js"
import Message from "../Message/Message.jsx"
import Spinner from "../Spinner/Spinner.jsx"

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function Form() {
  const [Lat, Lng] = useUrlPosition()

  const [cityName, setCityName] = useState("")
  const [country, setCountry] = useState("")
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState("")

  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false)
  const [emoji, setEmoji] = useState("")
  const [geoCodingError, setGeoCodingError] = useState("")

  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoadingGeoCoding(true)
        setGeoCodingError("")
        const res = await fetch(`${BASE_URL}?latitude=${Lat}&longitude=${Lng}`)
        const data = await res.json()

        if (!data.countryCode) {
          throw new Error(
            "That doesn't seem to be a city . Click somewhere else 😉",
          )
        }

        setCityName(data.city || data.locality || "")
        setCountry(data.countryName)
        setEmoji(convertToEmoji(data.countryCode))
      } catch (err) {
        setGeoCodingError(err.message)
      } finally {
        setIsLoadingGeoCoding(false)
      }
    }

    fetchCityData()
  }, [Lat, Lng])

  if (isLoadingGeoCoding) return <Spinner />
  if (geoCodingError) return <Message message={geoCodingError} />

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  )
}

export default Form
