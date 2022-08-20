import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle
} from 'react'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import LoadingV2 from '../LoadingV2'
import { ScrollContainer, PullUpLoading, PullDownLoading } from './style.js'
import { debounce } from '../../utils'
import { useMemo } from 'react'

// ref 是父组件传过来的
const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState()
  const scrollContainerRef = useRef()

  const {
    direction,
    click,
    refresh,
    bounceTop,
    bounceBottom,
    pullUpLoading,
    pullDownLoading
  } = props
  // 回调函数
  const { pullUp, pullDown, onScroll } = props

  const PullUpdisplayStyle = pullUpLoading
    ? { display: '' }
    : { display: 'none' }
  const PullDowndisplayStyle = pullDownLoading
    ? { display: '' }
    : { display: 'none' }

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)

    return () => {
      setBScroll(null)
    }
  }, [])

  useEffect(() => {
    if (!bScroll || !onScroll) return
    bScroll.on('scroll', (scroll) => {
      onScroll(scroll)
    })

    return () => {
      bScroll.off('scroll')
    }
  }, [bScroll, onScroll])

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 300)
  }, [pullUp])
  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 300)
  }, [pullDown])

  // 上拉
  useEffect(() => {
    if (!bScroll || !pullUp) return
    const handlePullUp = () => {
      //判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce()
      }
    }
    bScroll.on('scrollEnd', handlePullUp)
    // 解绑
    return () => {
      bScroll.off('scrollEnd', handlePullUp)
    }
  }, [pullUp, pullUpDebounce, bScroll])

  // 判断用户的下拉动作
  useEffect(() => {
    if (!bScroll || !pullDown) return
    const handlePullDown = (pos) => {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce()
      }
    }
    bScroll.on('touchEnd', handlePullDown)
    return () => {
      bScroll.off('touchEnd', handlePullDown)
    }
  }, [pullDown, pullDownDebounce, bScroll])

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll
      }
    }
  }))

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      <PullUpLoading style={PullUpdisplayStyle}>
        <Loading></Loading>
      </PullUpLoading>
      <PullDownLoading style={PullDowndisplayStyle}>
        <LoadingV2></LoadingV2>
      </PullDownLoading>
    </ScrollContainer>
  )
})

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool // 是否支持向上吸顶
}

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}

export default Scroll
