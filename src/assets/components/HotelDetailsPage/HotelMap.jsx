import { Map, Marker } from "pigeon-maps"

const HotelMap = ({lat, lon}) => {
  return (
    <Map center={[+lat,+lon]} width={300} height={300}>
      <Marker width={50} anchor={[+lat,+lon]}/>
    </Map>
  )
}

export default HotelMap
