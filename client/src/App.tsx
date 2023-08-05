import './style.css'
import mainicon from './assets/main.png'
import Header from './components/Header'

// https://react-icons.github.io/react-icons/icons?name=hi2
function App() {
  return (
    <div>
      <Header /> {/* Header */}
      <div className="h-20 bg-cover" style={{backgroundImage:'url(./src/assets/2.png)'}}></div> {/* Subheader */}
      
      <div className='bg-reddit_dark-brighter'>
        <div className="mx-4">
          <div className="h-20 w-20">
            <img src={mainicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
