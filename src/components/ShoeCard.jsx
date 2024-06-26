const shoeCard = ({changeBigShoeImage, bigShoeImage, imgURL}) => {
  const handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage === imgURL? 'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1`} onClick={handleClick}>
       <div>
    <img src={imgURL.thumbnail} alt="" />
    </div>
    </div>
  )
}

export default shoeCard
