import styles from "./Map.module.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useState } from "react"
import { useCities } from "../../contexts/Cities.jsx"

function Map() {
  const navigate = useNavigate()
  const { cities } = useCities()
  const [mapPosition, setMapPosition] = useState([40, 0])

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.name}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
