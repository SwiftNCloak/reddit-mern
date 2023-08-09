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

      <div className="border border-reddit_border bg-reddit_dark-bright">
        <h2>I miss you na</h2>
        <div>
          Look at the start for a minute
          
        </div>
      </div>
    </div>
  )
}

export default App
