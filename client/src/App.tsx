import './style.css'
import Logo from './assets/reddit-logo.png'
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

// The navbar
function App() {
  return (
    <div>
      <header className='flex w-full bg-reddit_dark p-2'>
        <div className="mx-4">
          <img src={Logo} className='w-8 h-8 bg-reddit_dark' />
        </div>
        
        <form action="" className='bg-reddit_dark-brighter px-3 flex rounded-md border border-gray-600'>
          <MagnifyingGlassIcon className="text-gray-300 h-5 w-5 mt-1.5"/>
          <input type="input" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
        </form>
      </header>
    </div>
  )
}

export default App
