// import Accordian from "./Accordian";
import "./app.css"
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// import Testimonials from "./Testimonials";
// import { accordions } from './utils/content'
// import Validate from "./Validate";

 
function App() {
  return (
    
       <>
        <Sidebar/>
        <Navigation/>
        <Recommended/>
        <Products/>
       </>
   
  );
}

export default App;
