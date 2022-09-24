import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Top, Tab, TabItem } from './style'

import Player from '../Player'

const Home = () => {
  let navigate = useNavigate()
  const handleClickSearch = () => {
    navigate('/search')
  }

  return (
    <div>
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert('本项目告一段落，作者要写下一个项目了!~')}
        >
          &#xe65c;
        </span>
        <span className="title">MusicWebApp</span>
        <span className="iconfont search" onClick={() => handleClickSearch()}>
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/" activeclassname="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeclassname="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeclassname="selected">
          <TabItem>
            <span> 榜单 </span>
          </TabItem>
        </NavLink>
      </Tab>

      <Outlet />
      <Player />
    </div>
  )
}

export default React.memo(Home)
