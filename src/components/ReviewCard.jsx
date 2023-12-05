import { star } from "../assets/icons"

const ReviewCard = ({image, name, rating, feedback}) => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <img src={image} alt={name} width={120} height={120} className="rounded-full"/>

      <p className="info-text max-w-sm mt-10 text-center">{feedback}</p>

      <div className="flex justify-center items-center gap-4 mt-5 text-2xl info-text">
        <img src={star} alt="star icon" />
        <p>({rating})</p>
      </div>
      

      <p className="font-palanquin text-3xl font-bold">{name}</p>
    </div>
  )
}

export default ReviewCard