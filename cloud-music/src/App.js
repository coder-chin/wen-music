import { Provider } from 'react-redux'

import store from './store/index'
import MyRouter from './routes/index'
import { GlobalStyle } from './assets/styles/reset'
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <MyRouter></MyRouter>
      </div>
    </Provider>
  )
}

export default App
