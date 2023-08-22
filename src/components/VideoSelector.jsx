function VideoSelector({ videos, setIndex }) {

    return (
        <>
            <h1>Video Selector</h1>
            {videos.map((video) => <button key={video.id} onClick={() => setIndex(video.id)}>video.title</button> )}
        </> 
    )
}

export default VideoSelector