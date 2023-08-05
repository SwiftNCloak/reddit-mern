import './style.css'
import Logo from './assets/reddit-logo.png'
import Avatar from './assets/reddit-avatar.png'
import {MagnifyingGlassIcon, 
        BellIcon,
        ChatBubbleOvalLeftEllipsisIcon,
        PlusIcon,
        ChevronDownIcon
       } from "@heroicons/react/24/outline";

// https://react-icons.github.io/react-icons/icons?name=hi2
function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <header className='w-full bg-reddit_dark p-2'>
        <div className="mx-4 flex">
          {/* Logo */}
          <img src={Logo} className='w-8 h-8 bg-reddit_dark mr-4' />
          <form action="" className='bg-reddit_dark-brighter px-3 flex rounded-md border border-gray-600 mx-4 flex-grow'>
            <MagnifyingGlassIcon className="text-gray-300 h-5 w-5 mt-1.5"/>
            <input type="input" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
          </form>
          
          {/* Buttons */}
          <button className='px-2 py-1'>
            <ChatBubbleOvalLeftEllipsisIcon className='text-gray-400 w-6 h-6 mx-2'/>
            </button>
          <button className='px-2 py-1'>
            <BellIcon className='text-gray-400 w-6 h-6 mx-2'/>
          </button>
          <button className='px-2 py-1'>
            <PlusIcon className='text-gray-400 w-6 h-6 mx-2'/>
          </button>

          {/* Avatar */}
          <button className='rounded-md flex ml-4'>
            <div className='bg-gray-600 w-8 h-8 rounded-md'>
              <img src={Avatar} style={{filter:'invert(100%)'}} className='block' />
            </div>
            <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 ml-2'/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
