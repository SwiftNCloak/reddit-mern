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

      <div className='px-6 bg-reddit_dark text-reddit_text'>
        <div className="border border-reddit_border bg-reddit_dark-bright p-2 rounded-md">
          <h5 className="text-reddit_text-dark text-sm mb-1">Posted by u/markyjames 10 hours ago</h5>
          <h2 className='text-xl mb-3 font-bold'>Reddit clone, please? 🥺</h2>
          <div className='text-sm leading-6'>
            <p>
              Look at the stars
              Look how they shine for you
              And everything you do
              Yeah, they were all yellow
              I came along
              I wrote a song for you
              And all the things you do
              And it was called Yellow
              So then I took my turn
              Oh, what a thing to have done
              And it was all yellow
              Your skin, oh yeah, your skin and bones
              Turn into something beautiful
              And you know, you know I love you so
              You know I love you so
              I swam across
              I jumped across for you
              Oh, what a thing to do
              'Cause you were all yellow
              I drew a line
              I drew a line for you
              Oh, what a thing to do
              And it was all yellow
              And your skin, oh yeah, your skin and bones
              Turn into something beautiful
              And you know, for you, I'd bleed myself dry
              For you, I'd bleed myself dry
              It's true
              Look how they shine for you
              Look how they shine for you
              Look how they shine for
              Look how they shine for you
              Look how they shine for you
              Look how they shine
              Look at the stars
              Look how they shine for you
              And all the things that you do <br /><br />

              Look at the stars
              Look how they shine for you
              And everything you do
              Yeah, they were all yellow
              I came along
              I wrote a song for you
              And all the things you do
              And it was called Yellow
              So then I took my turn
              Oh, what a thing to have done
              And it was all yellow
              Your skin, oh yeah, your skin and bones
              Turn into something beautiful
              And you know, you know I love you so
              You know I love you so
              I swam across
              I jumped across for you
              Oh, what a thing to do
              'Cause you were all yellow
              I drew a line
              I drew a line for you
              Oh, what a thing to do
              And it was all yellow
              And your skin, oh yeah, your skin and bones
              Turn into something beautiful
              And you know, for you, I'd bleed myself dry
              For you, I'd bleed myself dry
              It's true
              Look how they shine for you
              Look how they shine for you
              Look how they shine for
              Look how they shine for you
              Look how they shine for you
              Look how they shine
              Look at the stars
              Look how they shine for you
              And all the things that you do
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
