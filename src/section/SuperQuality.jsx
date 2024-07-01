import Button from "../components/button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section
    id='about-us'
    className='flex justify-between items-start max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-col flex-1'>
        <h2 className="font-bold text-4xl capitalize font-palanquin lg:max-w-lg ">
          We Provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Discover The New Styles You Can WearDiscover 
        The New Styles You Can Wear Discover The New Styles You Can Wear Discover The New Styles You Can Wear</p>
        <p className="mt-4 lg:max-w-lg info-text">Discover The New Styles You Can WearDiscover 
        The New Styles You Can Wear Discover</p>
        <div className="mt-11">
        <Button label="View Details" />
        </div> 
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />

      </div>
    </section>
  )
}

export default SuperQuality
