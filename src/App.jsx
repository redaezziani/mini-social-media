import {Home,Posts,Albums,Users,} from './routes/routes'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {

  return (
    <div className="flex flex-col justify-start items-center gap-2 w-full min-h-screen">
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/albums/:id" element={<Albums />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
