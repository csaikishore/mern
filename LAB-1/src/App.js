import Id from './idcompo/Id';
import Back from './idcompo/Back';
 import { Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Id/>}></Route>
      <Route path='/back' element={<Back/>}></Route>
    </Routes>
  );
}

export default App;
