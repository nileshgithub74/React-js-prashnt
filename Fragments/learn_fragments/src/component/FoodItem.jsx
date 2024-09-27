
import Item from "./item"

function FoodItem (){
 

  let foodItems = ["dal", "Milk", "vegetable", "Roti", "Salad", "rice"];

  return(
    <>

<ul className='list-group'>
    
    {foodItems.map((item) =>(
       <Item key={Item}   foodItem={item}> </Item>
     ))}
    </ul>

    </>
  )
}

export default FoodItem