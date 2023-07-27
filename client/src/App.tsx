import './style.css'
import Logo from './assets/reddit-logo.png'

function App() {
  return (
    <div>
      <header className='flex w-full bg-reddit_dark p-1'>
        <img src={Logo} className='w-8 h-8 bg-reddit_dark' />
      </header>
    </div>
  )
}

export default App
