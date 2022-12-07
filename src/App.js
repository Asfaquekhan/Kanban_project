import './App.css';
import Main from './component/Main';
import {Route,Routes} from "react-router-dom"
import Create from './component/Create';
import Edit from './component/Edit';


function App() {
  return (
    <div className=" mx-auto">
  <Routes>
     <Route path='/' element={<Main/>}/>
     <Route path='create' element={<Create/>}/>
     <Route path='update' element={<Edit/>}/>
   
     </Routes>
    </div>
  );
}

export default App;
