import Home from "../src/pages/Home";
import './App.css';

function App() {
  


  return (
    <div className="App">
<Home />
    </div>
  );
}

export function avgNum (...params){
  let avg=0;
   params.forEach(num=>avg += num)/4;
   return avg/params.length;
  }


export default App;
