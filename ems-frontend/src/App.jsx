import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'


function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>
          {/* // http://localhost:3000 */}
          {/* <Route path='/' element = { <ListEmployeeComponent />}></Route> */}

          <Route path='/employees' element={<><HeaderComponent /><ListEmployeeComponent /><FooterComponent /></>}></Route>

          <Route path='/add-employee' element={<><HeaderComponent /><EmployeeComponent /></>}></Route>

          <Route path='/edit-employee/:id' element={<><HeaderComponent /><EmployeeComponent /> </>}></Route>

          <Route path="/" element={<Login />} />

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
