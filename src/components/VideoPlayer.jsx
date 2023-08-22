import { useEffect, useRef } from "react"

function VideoPlayer({ currentVideo }) {
    const videoRef = useRef(null);

    useEffect(() => { videoRef.current.load() }, [currentVideo])

    return (
        <>
            <video ref={videoRef} controls>
                {currentVideo.map((video) =>
                    <source key={video.id} src={video.src} type={video.type} />
                )}
            </video>
        </>
    )
}

export default VideoPlayer