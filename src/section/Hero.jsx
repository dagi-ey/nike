import Button from "../components/button"
import { useState } from "react"
import {arrowRight} from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id='home' 
    className='w-full flex xl:flex-row flex-col justify-center 
    min-h-screen gap-10 max-container '>
      <div className='relative xl:w-2/5 flex flex-col justify-center
       items-start w-full max-xl:padding-x pt-28'>
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="font-bold text-8xl mt-10 font-palanquin
        max-sm:text-[72px] max-sm:leading-[82] ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg 
        leading-8 mt-6 mb-14 sm:max-w-sm">Discover The New Styles You Can Wear</p>
        <Button label="Shop Now" 
        iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat)=> (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
       </div>

       <div className="flex-1 relative flex justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe1} alt="shoe collection"
        width={610} height={500} className="object-contain relative z-10"/>
        <div className="flex absolute sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe) =>(
          <div key={shoe}>
            <ShoeCard
            
            imgURL={shoe}
            changeBigShoeImage={() => {}}
              bigShoeImage=""
            />
          </div>
        ))}
       </div>
       </div>
    </section>
  )
}

export default Hero
