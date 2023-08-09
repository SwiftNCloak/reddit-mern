import './style.css'
import Avatar from './assets/reddit-avatar.png'

import Header from './components/Header'
import BoardHeader from './components/BoardHeader'
import PostForm from './components/PostForm'

// https://react-icons.github.io/react-icons/icons?name=hi2
function App() {
  return (
    <div>
      <Header /> {/* Header */}
      <BoardHeader /> {/* BoardHeader */}
      <PostForm /> {/* PostForm */}

      <div className='px-6 bg-reddit_dark text-gray-400'>
        <div className="border border-reddit_border bg-reddit_dark-bright p-2">
          <h2 className='text-xl mb-3'>I miss you na</h2>
          <div className='text-sm leading-6'>
            <p>
              Look at the start for a minute Look at the start for a minute Look at the start for a minute
              Look at the start for a minute Look at the start for a minute Look at the start for a minute
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
