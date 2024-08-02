const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
    return (
      <button className= {`rounded-full flex justify-center items-center gap-2 py-4 px-7 leading-none  border font-montserrat text-lg ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}`}>
          {label}
          {iconUrl && 
          <img src={iconUrl} alt="arrow right icon" className="rounded-full ml-2 w-5 h-5" />}
          
      </button>
    )
  }
  
  export default Button