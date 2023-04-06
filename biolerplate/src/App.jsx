import { Home, Contact } from './modules'
import { Button, Footer, Header } from './components'
import { Logo, Mic, Rating } from './assets'
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
      <img src={Rating} alt="####" />
      <img src={Mic} alt="####" />
      <h1>{store}</h1>
    </div>
  )
}

export default App