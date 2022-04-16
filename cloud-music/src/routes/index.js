import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Ranking from '../pages/Ranking'
import Recommend from '../pages/Recommend'
import Singers from '../pages/Singers'

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/ranking" element={<Ranking />} />
        <Route exact path="/recommend" element={<Recommend />} />
        <Route exact path="/singers" element={<Singers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter
