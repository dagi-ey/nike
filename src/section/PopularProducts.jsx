import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="text-4xl font-palanquin font-bold">Our  
          <span className="text-coral-red"> Popular </span>Products</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Esse atque maxime repellendus soluta sunt.<br/> Alias, in? Voluptatum
           tempora quidem placeat quisquam,um cumque ut!</p>

           <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product)=> ( <PopularProductCard key={product.name} {...product} />))}
           </div>

      </div>
    </section>
  )
}

export default PopularProducts
