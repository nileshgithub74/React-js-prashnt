import AppName from "./components/AppName";
import AddtoDo from "./components/AddtoDo";

function App() {
  return (
    <>
     <AppName/>

     <AddtoDo/>
     <AddtoDo/>
     <AddtoDo/>
     


     

      <div className="container text-center">
      
        <div className="row">
          <div className="col-4">
           Milk
          </div>
          <div className="col-4">
            22/9/2024
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-danger">Add</button>
          </div>
        </div>
     

      
      
      <div className="row">
        <div className="col-4">
         Go to Clg
        </div>
        <div className="col-4">
          23/9/2024
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger">Add</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
