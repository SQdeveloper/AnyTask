import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SideBar from './components/SideBar'
import DailyTasks from './routes/DailyTasks/DailyTasks'
import Todos from './routes/Todos/Todos'
import './App.css'
import Targets from './routes/Targets/Targets'

const App = ()=> {  
  return (
    <Router>      
      <div className="w-full flex bg-waves bg-center bg-cover bg-no-repeat">
          <div className="animate-appear-right w-[230px] py-4 bg-transparent-white backdrop-blur-md">
              <SideBar/>
          </div>
          <div className="flex-1 px-8 py-4 h-[100svh]">
            <Routes>
              <Route path='/' element={<Navigate to='/todos'/>}/>
              <Route path='/todos' element={<Todos/>}/>
              <Route path='/dailytasks' element={<DailyTasks/>}/>
              <Route path='/targets' element={<Targets/>}/>
            </Routes>                
          </div>
      </div>        
    </Router>
  )
}

export default App
