import appStore from './UTILS/appStore';
import './App.css';
import { Body } from './COMPONENTS/Body';
import {Provider} from "react-redux"
function App() {
  return (
    <h1 >
    
    <Provider store={appStore}>
    <Body/>
    </Provider>
    
    </h1>
  );
}

export default App;
