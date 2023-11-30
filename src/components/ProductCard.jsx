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
      <img src={imageUrl} alt="" width={127} height={103}/>
    </div>
  )
}

export default ProductCard