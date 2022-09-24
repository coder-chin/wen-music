import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
const Recommend = lazy(() => import('@/pages/Recommend'))
const Singers = lazy(() => import('@/pages/Singers'))
const Rank = lazy(() => import('@/pages/Rank'))
const Album = lazy(() => import('@/pages/Album'))
const Singer = lazy(() => import('@/pages/Singer'))
const Search = lazy(() => import('@/pages/Search'))

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
          <Route index element={SuspenseComponent(Recommend)()}></Route>

          <Route path="recommend">
            <Route path=":id" element={SuspenseComponent(Album)()} />
          </Route>

          <Route path="singers" element={SuspenseComponent(Singers)()}>
            <Route path=":id" element={SuspenseComponent(Singer)()} />
          </Route>

          <Route path="rank" element={SuspenseComponent(Rank)()}>
            <Route path=":id" element={SuspenseComponent(Album)()} />
          </Route>

          <Route path="album">
            <Route path=":id" element={SuspenseComponent(Album)()} />
          </Route>

          <Route path="search" element={SuspenseComponent(Search)()}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
