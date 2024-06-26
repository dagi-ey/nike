const shoeCard = ({changeBigShoeImage, bigShoeImage, imgURL}) => {
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage === imgURL? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}>
    </div>
  )
}

export default shoeCard
