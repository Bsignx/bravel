import { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { Typography } from '@bsignx/bravel-ui'
import { LatLng } from 'leaflet'

type MapProps = {
  onChangePosition: (position: LatLng) => void
  position: LatLng | null
}

const Map = ({ onChangePosition, position }: MapProps) => {
  return (
    <>
      <Typography variant="body2" className="mb-2">
        Select group location on map*
      </Typography>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={12}
        className="h-80 w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker
          onChangePosition={onChangePosition}
          position={position}
        />
      </MapContainer>
    </>
  )
}

function LocationMarker({
  onChangePosition,
  position,
}: {
  onChangePosition: (position: LatLng) => void
  position: LatLng | null
}) {
  const map = useMapEvents({
    click(event) {
      onChangePosition(event.latlng)
      map.flyTo(event.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You group is here!</Popup>
    </Marker>
  )
}

export default Map
