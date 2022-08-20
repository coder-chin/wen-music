import React, { useRef, useEffect } from 'react'
import { PropTypes } from 'prop-types'

import Scroll from '../Scroll'
import { List, ListItem } from './style'

function Horizen(props) {
  const { list, currentVal, title, handleClick } = props

  const Category = useRef(null)

  useEffect(() => {
    let categoryDOM = Category.current
    let tagElems = categoryDOM.querySelectorAll('span')
    let totalWidth = 0
    Array.from(tagElems).forEach((ele) => {
      totalWidth += ele.offsetWidth
    })
    categoryDOM.style.width = `${totalWidth}px`
  }, [])

  return (
    <Scroll direction={'horizental'}>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.name}
                className={`${currentVal === item.key ? 'selected' : ''}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            )
          })}
        </List>
      </div>
    </Scroll>
  )
}

Horizen.defaultProps = {
  list: [],
  currentVal: '',
  title: '',
  handleClick: null
}
Horizen.propTypes = {
  list: PropTypes.array,
  currentVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}

export default React.memo(Horizen)
