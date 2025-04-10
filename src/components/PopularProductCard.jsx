import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt="name"
        className="w-[280px] h-[280px]" />
        <div className="mt-3 flex flex-col justify-start gap-2.5">
            <img src={star} alt="" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-montserrat text-coral-red font-semibold text-2xl">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard