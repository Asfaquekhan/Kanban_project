import './App.css';
import Main from './component/Main';
import {Route,Routes} from "react-router-dom"
import Create from './component/Create';

function App() {
  return (
    <div className=" mx-auto">
  <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='read' element={<Create/>}/>
     </Routes>
    </div>
  );
}

export default App;
