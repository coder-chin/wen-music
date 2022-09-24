import { Provider } from 'react-redux'

import GlobalStyle from '@/assets/style/style'
import IconStyle from '@/assets/icon/iconfont'
import AppRouter from '@/routes/index.jsx'
import store from './store'
import { Data } from './pages/Singers/context'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconStyle />
      <Data>
        <AppRouter />
      </Data>
    </Provider>
  )
}

export default App
