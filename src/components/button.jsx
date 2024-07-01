const Button = ({label, iconURL}) => {
    return (
      <button className="flex justify-center items-center gap-2 px-7 py-4
      border font-montserrat text-white text-lg leading-none bg-coral-red rounded-full
      border-coral-red ">
          {label} 
  
          {iconURL&&<img src={iconURL}
          alt="arrow right icon"
          className="rounded-full ml-2 w-5 h-5" />}
      </button>
    )
  }
  
  export default Button
  