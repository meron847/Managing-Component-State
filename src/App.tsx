import { useState } from "react";
//import ExpandableText from "./assets/component/ExpandableText";


function App() {
  const [game, setGame]=useState({
    id:1,
    player:{
      name:"jone",
    }
  });

  const[pizza,setPizza]= useState({
name:'Spicy Pepperni',
toppings:['Mushroom']
  });

  const [cart, setCart] =useState({
     discount:.1,
     items:[
      {id:1, title: 'Product 1', quantity:1},
      {id:2, title: 'Product 2', quantity:1},
     
     ]
  })


  const handleClick=()=>{
    setGame({...game, player:{...game.player, name: 'Bob'}})//to change the name
   
    setPizza({...pizza,toppings:[...pizza.toppings,'chees']})//to add new element

    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity+1}: item)})
  }//to add a quantity by 1 when a custumer click the first id
  return (
    <div>
     
      <button onClick={handleClick}></button>
    </div>
  )


export default App;
    

}
