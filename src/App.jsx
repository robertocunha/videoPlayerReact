import './App.css'
import VideoPlayer from './components/VideoPlayer'
import VideoSelector from './components/VideoSelector'

function App() {
  const videosPath = "/src/assets/videos/";
  const currentVideo = [
    {id: 0, src: `${videosPath}video01.mp4`, type: "video/mp4"},
    {id: 1, src: `${videosPath}video01.ogg`, type: "video/ogg"},
  ]

  return (
    <>
      <h1>Video Player React</h1>
      <VideoPlayer currentVideo={ currentVideo } />
      <VideoSelector />
    </>
  )
}

export default App
