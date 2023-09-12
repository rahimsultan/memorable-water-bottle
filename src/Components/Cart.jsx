import React from 'react';

const Cart = ({cart, handleRemove}) => {
    // console.log(cart);
  return (
    <>
        <div>Cart items: {cart.length}</div>
        <div className='grid gap-5 md:gap-10 grid-cols-3 mx-auto'>
            {
                cart.map((item, i) => {
                    return (
                    <div key={i} className='flex items-center gap-5'>
                        <img src={item.img} alt="" className='w-[50px] h-[50px]'/>
                        <p>{item.name}</p>
                        <button 
                        onClick={()=>handleRemove(item.id)}
                         className=" rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Remove</button>
                    </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Cart