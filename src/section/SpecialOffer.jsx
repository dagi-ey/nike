import { offer } from "../assets/images"
import Button from "../components/button"
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} 
        className="object-contain w-full" />
      </div>

      <div className='flex flex-col flex-1'>
        <h2 className="font-bold text-4xl capitalize font-palanquin lg:max-w-lg ">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Discover The New Styles You Can WearDiscover 
        The New Styles You Can Wear Discover The New Styles You Can Wear Discover The New Styles You Can Wear</p>
        <p className="mt-4 lg:max-w-lg info-text">Discover The New Styles You Can WearDiscover 
        The New Styles You Can Wear Discover</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Shop now' />
        <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div> 
      </div>
    </section>
  )
}

export default SpecialOffer
