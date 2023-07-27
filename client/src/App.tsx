import './style.css'
import Logo from './assets/reddit-logo.png'
import Search from './assets/search.svg'

function App() {
  return (
    <div>
      <header className='flex w-full bg-reddit_dark p-2'>
        <div className="mx-4">
          <img src={Logo} className='w-8 h-8 bg-reddit_dark' />
        </div>
        
        <form action="" className='bg-gray-800 p-1 px-2 flex rounded-md'>
          <img src={Search} className="text-gray-300 h-7 w-7"/>
          <input type="input" className="bg-gray-800 h-6" />
        </form>
      </header>
    </div>
  )
}

export default App
