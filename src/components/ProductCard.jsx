const ProductCard = ({img, imageUrl, changeImage}) => {
  
  const handleClick = () => {
    if (img !== imageUrl.bigShoe) {
      changeImage(imageUrl.bigShoe)
    }
  }

  return (
    <div className={`border-2 rounded-xl ${img === imageUrl ? "border-coral-red" : "border-none"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    > 
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">

        <img src={imageUrl} alt="" width={127} height={103}/>
      </div>
    </div>
  )
}

export default ProductCard