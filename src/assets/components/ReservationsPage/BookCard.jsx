import './styles/BookCard.css'


const BookCard = ({book, deleteReservations, setBookSelected, setFormIsOpen}) => {

  const initialDate = new Date(book.checkIn).getTime()
  const finalDate = new Date(book.checkOut).getTime()
  const reservationDays = (finalDate - initialDate) / (1000*3600 *24);

  console.log(initialDate);
  console.log(finalDate);
  console.log(reservationDays);

  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${book.id}`;
    deleteReservations(url, book.id, true);
  }
  
  const handleReview = () => {
    setFormIsOpen(true);
    setBookSelected(book);
  }
  

  return (
    <article className='reservation flex-container'>
      <header className='reservation__header'>
        <img className='reservation__image' src={book.hotel.images[0].url} alt={book.hotel.name} />
      </header>
      <section className='reservation__body'>
        <h3 className='reservation__name'>{book.hotel.name}</h3>
        <div className='reservation__city'>
          {book.hotel.city.name}, {book.hotel.city.country}
        </div>
        <p onClick={handleReview} className='reservation__review'>Rate and comment this visit... ¡Click here!</p>
        <ul className='reservation__list'>
          <li className='reservation__list-item flex-container'>
            <span className='reservation__list-label'>Reservation Days: </span>
            <span className='reservation__list-value'> </span>
          </li>
          <li className='reservation__list-item flex-container'>
            <span className='reservation__list-label'>Subtotal Price: </span>
            <span className='reservation__list-value'> USD ${reservationDays * book.hotel.price}</span>
          </li>
        </ul>
        <button className='reservation__btn' onClick={handleDelete}>
            <i className='bx bx-trash'></i>
        </button>
      </section>
    </article>
  )
}

export default BookCard
