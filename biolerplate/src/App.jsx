import { Home, Contact } from './modules'
import { Button, Footer, Header } from './components'
import { Logo } from './assets'
import { store } from './store'

const App = () => {
  return (
    <div>
      <Home></Home>
      <Contact></Contact>
      <Button></Button>
      <Footer></Footer>
      <Header></Header>
      <img src={Logo} alt="####" />
      <h1>{store}</h1>
    </div>
  )
}

export default App