
//  import 'bootstrap/dist/css/bootstrap.min.css';
// // import React from 'react';



// // function App() {


// //   let foodItems = ["dal", "Milk", "vegetable", "Roti", "Salad", "rice","egg"];

  

// //   return (
// //     <>
// //     <h1>Healthy food</h1>

// //      <ul className='list-group'>

    

// //        {foodItems.map((item ) =>(
// //        <li key={item} className='list-group-item'>{item}</li>
// //         ))};

// //      </ul>


     
       
// //     </>


// //   )
// // }

// // export default App
// // import React from 'react';

// // function App() {
// //   const foodItems = ["dal", "Milk", "vegetable", "Roti", "Salad", "rice"];

// //   return (
// //     <>
// //       <h1>Healthy food</h1>
// //       <ul className='list-group'>
// //         {foodItems.map((item, index) => (      ///  use map instead for "For loop"
// //           <li className='list-group-item' key={index}>{item}</li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // }

// // export default App;





// ///==============   Conditional Rendering ===============


// // import React  from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import FoodItem from './component/FoodItem';
// import Errormessage from './component/Errormessage';

// function App(){

//   // let foodItems =[];
//   // let foodItems = ["dal", "Milk", "vegetable", "Roti", "Salad", "rice"];

//   // let emptyMessage =  
//   //      foodItems.length==0 ? <h2>I am still hungry and want to eat briyani
//   //      </h2> : null;


//   // if(foodItems.length==0){
//   //   return(
//   //     <>
//   //       <h3>I am still Hungry</h3>
//   //     </>
//   //   )
//   // }
//   return (
//     <>

//     <h2>Healthy Food</h2>
//     {/* {foodItems.length ===0 ? emptyMessage :  null} */}

//    <Errormessage/>

//    <FoodItem/>
//     </>
//   )
// }


// export default App






import Login from "./component/login";




function App(){
  return (
    <>
    <Login></Login>

    </>
  )
}

export default App;