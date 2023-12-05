import ReviewCard from "../components/ReviewCard"
import { reviews} from "../constants"

const Reviews = () => {
  return (
    <div>
      <div>
        <h2 className="text-center mt-10 font-palanquin text-4xl max-sm:text-[62px] max-sm:leading-[72px] font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h2>

        <p className="text-center info-text mt-8 m-auto max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      </div>
      
      <div className="flex flex-1 max-md:flex-col mt-20 gap-10 justify-around items-center max-container">
        {reviews.map((item) => (
          <ReviewCard key={item} image={item.imgURL} name={item.customerName} rating={item.rating} feedback={item.feedback}/>
        ))}

      </div>
    </div>
  )
}

export default Reviews