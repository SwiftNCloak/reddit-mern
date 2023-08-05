import './style.css'
import Avatar from './assets/reddit-avatar.png'

import Header from './components/Header'
import BoardHeader from './components/BoardHeader'

// https://react-icons.github.io/react-icons/icons?name=hi2
function App() {
  return (
    <div>
      <Header /> {/* Header */}
      <BoardHeader /> {/* BoardHeader */}

      <div className="bg-reddit_dark px-6 py-4 text-gray-400">
        <div className="border border-reddit_border p-2 rounded-md flex">
          <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
            <img src={Avatar} alt="" style={{filter:'invert(100%)'}}/>
          </div>
          <form action="" className='flex-grow'>
            <input type="text" className='bg-reddit_dark-brighter border border-reddit_border p-2 block rounded-md ml-4' placeholder='New post'/>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default App
