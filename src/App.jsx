import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import Head from './Components/Head'
import store from './Utils/Store'
// 🧱 Root component of your UI (holds your app layout and components)
function App() {
 return(
   // -Head
   // -Body
   //   -Sidebar
   //     - Menu items
   //   -Maincontainer
   //     -Buttonlist
   //     -Videocontainer
   //     -Videocard
   <Provider store={store}>
   <div>  
   <Head/>
   <Body/>
  </div>
  </Provider>
 )
}

export default App
