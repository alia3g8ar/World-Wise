import styles from "./Map.module.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet"
import { useEffect, useState } from "react"
import { useCities } from "../../contexts/Cities.jsx"
import City from "../City/City.jsx"
import { useGeolocation } from "../../hooks/useGeolocation.js"
import Button from "../Button/Button.jsx"
import useUrlPosition from "../../hooks/useUrlPosition.js"

function Map() {
  const { cities } = useCities()
  const [mapPosition, setMapPosition] = useState([40, 10])
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation()

  const [mapLat, mapLng] = useUrlPosition()

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng])

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
  }, [geolocationPosition])

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapLat && mapLng ? [mapLat, mapLng] : [40, 10]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) =>
          city.position.lat && city.position.lng ? (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.name}</span>
              </Popup>
            </Marker>
          ) : null,
        )}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}

function DetectClick() {
  const navigate = useNavigate()

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  })
}

export default Map
