function VideoPlayer({ currentVideo }) {

    return (
        <>
            <h1>Video Player2</h1>
            <video controls>
                {currentVideo.map((video) =>
                    <source key={video.id} src={video.src} type={video.type} />
                )}
            </video>
        </>
    )
}

export default VideoPlayer