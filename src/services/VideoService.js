const VideoService = {
    getAllVideos: () => {
      return [
        {
          id: 0,
          title: "Vídeo 1",
          formats: [
            { formatId: 0, src: "video01.mp4", type: "video/mp4" },
            { formatId: 1, src: "video01.ogg", type: "video/ogg" },
          ],
        },
        {
          id: 1,
          title: "Vídeo 2",
          formats: [
            { formatId: 0, src: "video02.mp4", type: "video/mp4" },
            { formatId: 1, src: "video02.ogg", type: "video/ogg" },
          ],
        },
        // Outros vídeos...
      ];
    },
  };
  
  export default VideoService;
  