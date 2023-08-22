function VideoSelector({ videos, setIndex }) {

    return (
        <>
            {videos.map((video) => 
                <button key={video.id} onClick={() => setIndex(video.id)}>
                    {video.title}
                </button> 
            )}
        </> 
    )
}

export default VideoSelector