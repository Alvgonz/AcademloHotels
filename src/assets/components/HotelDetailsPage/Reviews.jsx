import useFetch from "../../../hooks/useFetch"
import { useEffect, useState } from "react";
import StarGenerator from "../shared/StarGenerator";

const Reviews = ({hotelId}) => {
  const [visibleComments, setVisibleComments] = useState(5)
  const [reviewsHotel, getReviewsHotel] = useFetch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/reviews?hotelId=${hotelId}`
    getReviewsHotel(url)
  }, [hotelId]);

  const handleReviews = () => {
    setVisibleComments((prevCount) => prevCount + 5)
  }
  
  
  console.log(reviewsHotel);

  return (
    <div>
      <h2>Comments:</h2>
      <div>
        {
          reviewsHotel?.results.slice(0, visibleComments).map((review) => (
            <ul key={review.id}>
              <li>{review.user.firstName}</li>
              <li>
                <StarGenerator rating={review.rating}/>
                {review.rating}
              </li>
              <li>{review.comment}</li>
            </ul>
          ))
        }
      </div>
      {
        visibleComments < reviewsHotel?.results.length && <button onClick={handleReviews}>See more...</button>
      }
    </div>
  )
}

export default Reviews
