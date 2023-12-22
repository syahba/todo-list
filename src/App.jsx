import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ActivePage from './components/ActivePage'
import CompletedPage from './components/CompletedPage'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'

function App() {
  const screen = window.innerWidth;

  return (
    <>
      <BrowserRouter>
        {screen > 426 ? <Sidebar></Sidebar> : <MobileHeader></MobileHeader>}

        <Routes>
          <Route path='/' element={<Dashboard screen={screen}></Dashboard>}></Route>
          <Route path='/active' element={<ActivePage screen={screen}></ActivePage>}></Route>
          <Route path='/completed' element={<CompletedPage screen={screen}></CompletedPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
