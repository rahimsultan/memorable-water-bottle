import React from 'react';

const Bottle = ({bottles, addToCart}) => {
    // console.log(bottles);
    const {img, name, stock, id} = bottles;
  return (
    <div className=" rounded-md border">
      <img
        src={img}
        alt="water bottle"
        className="h-[200px] w-full rounded-md object-contain"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          Stock: {stock}
        </p>
        <button
        onClick={()=>addToCart(bottles)}
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Bottle