import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import StarGenerator from '../assets/components/shared/StarGenerator'
import OtherHotels from '../assets/components/HotelDetailsPage/OtherHotels'
import HotelMap from '../assets/components/HotelDetailsPage/HotelMap'
import FormReservations from '../assets/components/HotelDetailsPage/FormReservations'
import Reviews from '../assets/components/HotelDetailsPage/Reviews'
import SliderImgHotels from '../assets/components/HotelDetailsPage/SliderImgHotels'

const HotelDetailsPage = () => {
  const { id } = useParams()
  const [hotel, getHotel] = useFetch()

  useEffect(() => {
    const url =`https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
  }, [id])

  //console.log(hotel)
  
  return (
    <section>
      <h2>{hotel?.name}</h2>
      <div>
        {hotel?.rating && <StarGenerator rating={hotel?.rating}/>}
        <span>{hotel?.rating}</span>
      </div>
      <div>
        <SliderImgHotels hotel={hotel}/>
      </div>
      {hotel && <HotelMap lat={hotel?.lat} lon={hotel?.lon}/>}
      <div>
        {hotel?.city.name}, {hotel?.city.country}
      </div>
      <div>
        <i className='bx bx-map'></i>
        <address>{hotel?.address}</address>
      </div>
      <p>{hotel?.description}</p>
      <section>
        {
          localStorage.getItem('token')  ? <FormReservations hotelId={hotel?.id} /> : <p>If ypu want to make a reservation, please <Link to="/login">Login</Link></p>
        }
      </section>
      <div>
        <Reviews hotelId={hotel?.id}/>
      </div>
      <OtherHotels city={hotel?.city} id={hotel?.id}/>
    </section>
  )
}

export default HotelDetailsPage
