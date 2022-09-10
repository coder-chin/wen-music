import React from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Top, Tab, TabItem } from './style'

import Player from '../Player'

const Home = (props) => {
  const { route } = props

  const handleClickSearch = () => {
    props.history.push('/search')
  }

  return (
    <div>
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert('作者要写下一个项目了!~')}
        >
          &#xe65c;
        </span>
        <span className="title">MusicWebApp</span>
        <span className="iconfont search" onClick={() => handleClickSearch()}>
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span> 榜单 </span>
          </TabItem>
        </NavLink>
      </Tab>

      {renderRoutes(route.routes)}
      <Player />
    </div>
  )
}

export default React.memo(Home)