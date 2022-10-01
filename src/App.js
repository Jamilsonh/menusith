import { GlobalStyle } from './global';
import {
  Route,
  Routes,
} from "react-router-dom";
import Screen1 from './components/Screens/MalgusScreen';
import Screen2 from './components/Screens/NihilusScreen';
import Screen3 from './components/Screens/RevanScreen';
import Screen4 from './components/Screens/BaneScreen';
import Menu from './components/Menu';
import submenu from './menu';



export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Screen1/>} />
        <Route path='/malgus' element={<Screen1/>} />
        <Route path='/nihilus' element={<Screen2/>} />
        <Route path='/revan' element={<Screen3/>} />
        <Route path='/bane' element={<Screen4/>} />
      </Routes> 
      <Menu menuItems={submenu}/>
      <GlobalStyle/>
    </div>
  );
}

