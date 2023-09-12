import React, { useEffect, useState } from 'react';
import { getItem, removeItem, setItemId } from '../Utils/localStorage';
import Bottle from './Bottle';
import Cart from './Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product)=>{
        setCart([...cart, product])
        setItemId(product.id)
    }

    const handleRemove = (id)=>{
        const remaining = cart.filter(idx => idx.id !== id)
        setCart(remaining)
        
        removeItem(id)
    }
    
    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    useEffect(()=>{
        if(bottles.length){
            const sCart = getItem();
            const filtered = []
            for(const id of sCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                filtered.push(bottle)
            }
            // console.log(filtered);
            setCart(filtered)
        }
        
    }, [bottles])

    
  return (
    <>
        <div className='max-w-6xl mx-auto py-3'>
            <Cart cart={cart} handleRemove={handleRemove}/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 max-w-6xl mx-auto'>
            {
                bottles.map(bottle=> <Bottle addToCart={handleAddToCart} key={bottle.id} bottles={bottle}/>)
            }
        </div>
        
    </>
    
  )
}

export default Bottles