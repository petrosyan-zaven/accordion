import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import AppClass from './classcomponent/appclass/AppClass'


ReactDOM.createRoot(document.getElementById('root')).render(
<>
  <Router >
     <Nav />
     <Routes>
          <Route path='/' element= {<App />} />
          <Route path='/class' element={<AppClass />} />
     </Routes>
     
  </Router>

</>
   

)
