import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Error from './Pages/Error'
import Main from './Pages/Main'
import Login from './Pages/Login'
import VotePage from './Pages/VotePage'
import VotesList from './Pages/VotesList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Login" element={<Login />} />
          <Route path="VotePage" element={<VotePage />} />
          <Route path="VotesList" element={<VotesList />} />
          <Route path="Error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
