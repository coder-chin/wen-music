import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Recommend from '@/pages/Recommend'
import Singers from '@/pages/Singers'
import Rank from '@/pages/Rank'
import Album from '@/pages/Album'
import Singer from '@/pages/Singer'
import Search from '@/pages/Search'
// const Recommend = lazy(() => import('@/pages/Recommend'))
// const Singers = lazy(() => import('@/pages/Singers'))
// const Rank = lazy(() => import('@/pages/Rank'))
// const Album = lazy(() => import('@/pages/Album'))
// const Singer = lazy(() => import('@/pages/Singer'))
// const Search = lazy(() => import('@/pages/Search'))

const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Recommend />}></Route>
          <Route path="singers" element={<Singers />}>
            <Route path=":id" element={SuspenseComponent(Singer)} />
          </Route>
          <Route path="rank" element={<Rank />}>
            <Route path=":id" element={SuspenseComponent(Album)} />
          </Route>
          <Route path="album" element={<Album />}>
            <Route path=":id" element={SuspenseComponent(Album)} />
          </Route>
          <Route path="search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
