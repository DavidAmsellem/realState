import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.scss'
import 'leaflet/dist/leaflet.css'

function Map({items}) {    
    return (
        <MapContainer center={[37.175190, -3.602031]} zoom={13} scrollWheelZoom={false} className='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.175190, -3.602031]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Map