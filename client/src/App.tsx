import './style.css'

import Header from './components/Header'
import BoardHeader from './components/BoardHeader'

// https://react-icons.github.io/react-icons/icons?name=hi2
function App() {
  return (
    <div>
      <Header /> {/* Header */}
      <BoardHeader /> {/* BoardHeader */}

      <div className="bg-reddit_dark px-6 py-4 text-gray-400">
        <div className="border border-reddit_border p-2 rounded-md">
          
        </div>
      </div>
    </div>
  )
}

export default App
