import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import Head from './Components/Head'
import store from './Utils/Store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Maincontainer from './Components/Maincontainer'
import Watchpage from './Components/Watchpage'
// 🧱 Root component of your UI (holds your app layout and components)

const appRouter = createBrowserRouter([{
   path:"/",
   element:<Body/>,
   children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"watch",
        element:<Watchpage/>
      }
   ]
}])

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
   <RouterProvider router={appRouter}/>
   {/* routerprovider provides paths with given element */}
  </div>
  </Provider>
 )
}

export default App
