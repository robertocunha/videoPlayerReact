import './App.css'
import VideoPlayer from './components/VideoPlayer'
import VideoSelector from './components/VideoSelector'

function App() {
  const videoAtual = "/src/assets/videos/video01.mp4";
  return (
    <>
      <h1>Video Player React</h1>
      <VideoPlayer videoAtual={videoAtual} />
      <VideoSelector />
    </>
  )
}

export default App
