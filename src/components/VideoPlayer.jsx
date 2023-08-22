function VideoPlayer({ videoAtual }) {
    return (
        <>
            <h1>Video Player2</h1>
            <video src={videoAtual} controls></video>
        </>
    )         
}

export default VideoPlayer