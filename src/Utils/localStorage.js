function getItem(){
   const savedCart =  localStorage.getItem('cart');
   if(savedCart){
    return JSON.parse(savedCart)
   }
   return []
}


function setItemId(itemId){
    const savedCart = getItem();
    savedCart.push(itemId)
    setItem(savedCart)
}

function setItem(items){
    const cartStr = JSON.stringify(items)
    localStorage.setItem('cart', cartStr)
}

function removeItem(itemId){
    const savedCart = getItem();
    const fill = savedCart.filter(id => id !== itemId)
    setItem(fill)
}

export { getItem, removeItem, setItemId };

