import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ActivePage from './components/ActivePage'
import CompletedPage from './components/CompletedPage'
import Sidebar from './components/Sidebar'
import Dropdown from './components/Dropdown'

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar></Sidebar>

        <Dropdown></Dropdown>

        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/active' element={<ActivePage></ActivePage>}></Route>
          <Route path='/completed' element={<CompletedPage></CompletedPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
