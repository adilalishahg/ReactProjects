import Accordian from "./Accordian";
import Testimonials from "./Testimonials";
import { accordions } from './utils/content'

 
function App() {
  return (
    <div className="App">
        {accordions.map(({title,content})=>(
                <Accordian title={title} content={content}/>
            ))}
    </div>
  );
}

export default App;
