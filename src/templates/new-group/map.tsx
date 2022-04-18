import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { Typography } from '@bsignx/bravel-ui'

const Map = () => {
  return (
    <>
      <Typography variant="body2" className="mb-2">
        Select group location on map*
      </Typography>
      <MapContainer
        center={[-20.02536013185394, -48.92572605039036]}
        zoom={12}
        className="h-80 w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[-20.02536013185394, -48.92572605039036]}
          draggable={true}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
