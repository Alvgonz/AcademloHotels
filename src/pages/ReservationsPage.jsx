import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import './styles/ReservationsPage.css'
import BookCard from '../assets/components/ReservationsPage/BookCard';
import FormReviews from '../assets/components/ReservationsPage/FormReviews';
import { Link } from 'react-router-dom';

const ReservationsPage = () => {
  const [reservations, getReservations, , deleteReservations] = useCrud();
  const [bookSelected, setBookSelected] = useState();
  const [formIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings';
    getReservations(url, true);
  }, []);

  console.log(reservations?.length);
  console.log(reservations);
  
  return (
    <section className='reservations flex-container'>
      <h2 className='reservations__title'>Reservations</h2>
      {reservations?.length ? <div>
        <FormReviews formIsOpen={formIsOpen} bookSelected={bookSelected} setFormIsOpen={setFormIsOpen} setBookSelected={setBookSelected}/>
      <div className='reservations__container flex-container'>
        {
          reservations?.map((book) => (
            <BookCard key={book.id} book={book} deleteReservations={deleteReservations} setBookSelected={setBookSelected} setFormIsOpen={setFormIsOpen}/>
          ))
        }
      </div>
      </div> : <h2> There aren't active reservations. To choose a hotel and a book go to <Link to='/'>Home</Link></h2>}
    </section>
  )
}

export default ReservationsPage
